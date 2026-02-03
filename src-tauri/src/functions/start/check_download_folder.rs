use std::fs;
use std::path::Path;

pub fn check_download_folder() {
    let folder_path = dirs::document_dir().unwrap().join("OngakuPlayerDownloads");

    if !Path::new(&folder_path).exists() {
        fs::create_dir_all(&folder_path).expect("Failed to create folder");
        println!("Folder created in: {:?}", folder_path);
    } else {
        println!("Folder already exists in: {:?}", folder_path);
    }
}
