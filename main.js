function autoReplay() {
    // Find the iframe containing the TikTok video
    var tiktokVideo = document.querySelector('.tiktok-embed iframe');
    
    // Add event listener for when the video ends
    tiktokVideo.addEventListener('ended', function() {
      // Reload the iframe to replay the video
      tiktokVideo.src = tiktokVideo.src;
    });
  }
  
  // Call the autoReplay function once the TikTok SDK is loaded
  document.addEventListener('DOMContentLoaded', autoReplay);