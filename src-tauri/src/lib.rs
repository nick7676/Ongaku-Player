mod functions;

use functions::start::check_download_folder;
use functions::user_info::get_username;

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        .plugin(tauri_plugin_fs::init())
        .plugin(tauri_plugin_opener::init())
        .setup(|_app| {
            check_download_folder();
            Ok(())
        })
        .invoke_handler(tauri::generate_handler![get_username])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
