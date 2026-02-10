use tauri::Manager;
use tauri_plugin_shell::ShellExt;

#[tauri::command]
pub async fn check_ytdlp_backend(app: tauri::AppHandle) -> Result<bool, String> {
    println!("--- Test Sidecar yt-dlp ---");


    let command = app
        .shell()
        .sidecar("yt-dlp_macos")
        .map_err(|e| format!("Sidecar configuration not found: {}", e))?
        .args(["--version"]);

    match command.output().await {
        Ok(output) => {
            if output.status.success() {
                let version = String::from_utf8_lossy(&output.stdout).trim().to_string();
                println!("yt-dlp is in the bundle and it works!");
                println!("Version: {}", version);
                if let Some(main_window) = app.get_webview_window("main") {
                    let _ = main_window.show();
                    let _ = main_window.set_focus();
                }
                println!("---------------------------");
                return Ok(true);
            } else {
                let error = String::from_utf8_lossy(&output.stderr).trim().to_string();
                println!("yt-dlp is present but returned an error:");
                println!("Error: {}", error);
                println!("---------------------------");
                return Ok(false);
            }
        }
        Err(e) => {
            println!("Critical error while executing binary: {}", e);
            println!("---------------------------");
            return Err(format!("Critical error while executing binary: {}", e));
        }
    }
}
