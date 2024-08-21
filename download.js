
const apiUrl = 'https://tiktok-video-downloader.p.rapidapi.com/v1/'; // Replace with your RapidAPI key
const apiKey = 'd3f7ff4b42mshe8bbb5b6a3c6135p18a81cjsn977beb4f1c13'; // Replace with your RapidAPI key

const videoUrlInput = document.getElementById('video-url');
const downloadBtn = document.getElementById('download-btn');
const downloadLinkDiv = document.getElementById('download-link');

downloadBtn.addEventListener('click', async () => {
    const videoUrl = videoUrlInput.value.trim();
    if (!videoUrl) return;

    try {
        const response = await fetch(`${apiUrl}video?url=${videoUrl}`, {
            headers: {
                'X-RapidAPI-Key': apiKey,
                'X-RapidAPI-Host': 'tiktok-video-downloader.p.rapidapi.com'
            }
        });

        const data = await response.json();
        const videoUrlWithoutWatermark = data.video_url;

        const a = document.createElement('a');
        a.href = videoUrlWithoutWatermark;
        a.download = 'tiktok_video.mp4';
        a.click();

        downloadLinkDiv.innerHTML = `Video downloaded successfully! <a href="${videoUrlWithoutWatermark}" download="tiktok_video.mp4">Download again</a>`;
    } catch (error) {
        console.error(error);
        downloadLinkDiv.innerHTML = 'Error downloading video. Please try again.';
    }
});