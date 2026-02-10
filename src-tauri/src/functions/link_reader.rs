
#[tauri::command]
pub fn link_reader(link: String){
    println!("Link: {}", link   );
}
