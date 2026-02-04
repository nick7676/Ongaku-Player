mod functions;

use functions::start::check_download_folder;
use functions::user_info::get_username;
use functions::utils::check_ytdlp_backend;

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        .plugin(tauri_plugin_fs::init())
        .plugin(tauri_plugin_opener::init())
        .plugin(tauri_plugin_shell::init())
        .setup(|app| {
            check_download_folder();
            let handle = app.handle().clone();
            tauri::async_runtime::spawn(async move {
                check_ytdlp_backend(handle).await;
            });
            Ok(())
        })
        .invoke_handler(tauri::generate_handler![get_username, check_ytdlp_backend])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
