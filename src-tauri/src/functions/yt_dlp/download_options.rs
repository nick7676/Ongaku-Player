use std::process::Command;
use serde::{Serialize, Deserialize};

#[derive(Serialize, Deserialize, Debug)]
pub struct SimpleOption {
    pub id: String,
    pub label: String,
}

pub fn get_ui_options(url: &str) -> Result<Vec<SimpleOption>, String> {
    let output = Command::new("yt-dlp")
        .args(["-J", "--flat-playlist", url])
        .output()
        .map_err(|e| e.to_string())?;

    let json: serde_json::Value = serde_json::from_slice(&output.stdout)
        .map_err(|e| e.to_string())?;

    let mut ui_options = Vec::new();

    if let Some(formats) = json["formats"].as_array() {
        for f in formats {
            let id = f["format_id"].as_str().unwrap_or("").to_string();
            let ext = f["ext"].as_str().unwrap_or("").to_string();
            let res = f["resolution"].as_str().unwrap_or("audio").to_string();

            ui_options.push(SimpleOption {
                id,
                label: format!("{} - ({})", res, ext),
            });
        }
    }

    Ok(ui_options)
}