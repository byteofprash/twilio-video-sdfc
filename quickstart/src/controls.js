function isAudioMuted(){
  window.room.localParticipant.audioTracks.forEach(track => {
    console.log("Audio track is:", track)
   });
}
