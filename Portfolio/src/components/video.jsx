import React from 'react'

const Video = () => {

    return (
        <div class="player">
            <video class="player__video viewer" src="https://www.dropbox.com/scl/fi/uwj50jsm9ljalzfurzd1g/The-Obsession1_by-Marcus-Feria.mp4?rlkey=ztin9w2clowa4x8f32wk4mk31&st=bmz48m00&raw=1"></video>  
            <div class="player__controls">
                <div class="progress">
                    <div class="progress__filled"></div>
                </div>
                <button class="player__button toggle" title="Toggle Play">►</button>
                <input type="range" name="volume" class="player__slider" min="0" max="1" step="0.05" value="1"/>
                <input type="range" name="playbackRate" class="player__slider" min="0.5" max="2" step="0.1" value="1"/>
                <button data-skip="-10" class="player__button">« 10s</button>
                <button data-skip="+25" class="player__button">25s »</button>
            </div>
        </div>
  )
  
}

export default Video
