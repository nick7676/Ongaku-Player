#[tauri::command]
pub fn get_username() -> String {
    let username = whoami::username();
    println!("{}", username);
    username
}
