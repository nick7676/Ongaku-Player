use tauri_plugin_shell::ShellExt;

#[tauri::command]
pub async fn check_ytdlp_backend(app: tauri::AppHandle) {
    println!("--- Test Sidecar yt-dlp ---");


    let command = match app.shell().sidecar("yt-dlp_macos") {
        Ok(cmd) => cmd.args(["--version"]),
        Err(e) => {
            println!("Error: The Sidecar configuration could not be found: {}", e);
            return;
        }
    };

    match command.output().await {
        Ok(output) => {
            if output.status.success() {
                let version = String::from_utf8_lossy(&output.stdout).trim().to_string();
                println!("yt-dlp is in the bundle and it works!");
                println!("Version: {}", version);
            } else {
                let error = String::from_utf8_lossy(&output.stderr).trim().to_string();
                println!("yt-dlp is present but returned an error:");
                println!("Error: {}", error);
            }
        }
        Err(e) => {
            println!("Critical error while executing binary: {}", e);
        }
    }
    println!("---------------------------");
}