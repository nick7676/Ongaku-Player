use crate::functions::check_download_folder::check_download_folder;
use crate::functions::get_username::get_username;
use crate::functions::link_reader::link_reader;
use crate::functions::start_utils::check_ytdlp_backend;

mod functions;


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
        .invoke_handler(tauri::generate_handler![get_username, check_ytdlp_backend, link_reader])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
