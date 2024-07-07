from pydub import AudioSegment
from pydub.utils import mediainfo

# Explicitly set the paths to ffmpeg and ffprobe
ffmpeg_path = r'C:\Users\deeks\Desktop\tools\ffmpeg-2024-07-04-git-03175b587c-full_build\bin\ffmpeg.exe'
ffprobe_path = r'C:\Users\deeks\Desktop\tools\ffmpeg-2024-07-04-git-03175b587c-full_build\bin\ffprobe.exe'

AudioSegment.converter = ffmpeg_path
mediainfo.FFMPEG_PATH = ffmpeg_path
mediainfo.FFPROBE_PATH = ffprobe_path

# Load the audio file
file_path = r"C:\Users\deeks\Desktop\GIT\deekshith0509.github.io\assets\horror\annabelle.mp3"
audio = AudioSegment.from_file(file_path)

# Define the start time in milliseconds
start_time = 30000  # 30 seconds

# Trim the audio from start_time to the end
trimmed_audio = audio[start_time:]

# Export the trimmed audio to a new file
export_path = r"annabelle.mp3"
trimmed_audio.export(export_path, format="mp3")
