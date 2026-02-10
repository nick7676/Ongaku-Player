use crate::functions::check_download_folder::check_download_folder;
use crate::functions::get_username::get_username;
use crate::functions::start_utils::check_ytdlp_backend;
use crate::functions::yt_dlp::download_options;
mod functions;
#[tauri::command]
async fn get_options(url: String) -> Result<Vec<download_options::SimpleOption>, String> {
    download_options::get_ui_options(&url)
}
#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        .plugin(tauri_plugin_fs::init())
        .plugin(tauri_plugin_opener::init())
        .plugin(tauri_plugin_shell::init())
        .setup(|_app| {
            check_download_folder();
            Ok(())
        })
        .invoke_handler(tauri::generate_handler![get_username, check_ytdlp_backend, get_options ])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
