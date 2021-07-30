import { HTML5Video } from '@clappr/core';
declare class DashShakaPlayback extends HTML5Video {
    static Events: {
        SHAKA_READY: string;
    };
    static shakaPlayer: any;
    static canPlay(resource: any, mimeType?: string): boolean;
    name: string;
    shakaVersion: any;
    shakaPlayerInstance: any;
    levels: any;
    seekRange: any;
    currentLevel: any;
    dvrEnabled: boolean;
    getDuration(): number;
    _duration: number;
    getCurrentTime(): number;
    _startTime: any;
    presentationStartTimeAsDate: any;
    bandwidthEstimate: any;
    constructor(...args: any[]);
    getProgramDateTime(): any;
    _updateDvr(status: any): void;
    seek(time: any): void;
    pause(): void;
    play(): void;
    _onPlaying(): any;
    _onSeeking(): any;
    _onSeeked(): any;
    _startTimeUpdateTimer(): void;
    _stopTimeUpdateTimer(): void;
    _setupSrc(): void;
    _ready(): void;
    _onShakaReady(): void;
    isReady: any;
    error(event: any): void;
    isHighDefinitionInUse(): boolean;
    stop(): void;
    textTracks: any;
    audioTracks: any;
    videoTracks: any;
    getPlaybackType(): string;
    selectTrack(track: any): void;
    /**
     * @override
     */
    closedCaptionsTracks: any;
    /**
     * @override
     */
    /**
     * @override
     */
    closedCaptionsTrackId: any;
    _enableShakaTextTrack(isEnable: any): void;
    _checkForClosedCaptions(): void;
    destroy(): void;
    _setup(): void;
    _createPlayer(): any;
    _setInitialConfig(): void;
    _loadSource(): void;
    _onTimeUpdate(): void;
    _handleBufferingEvents(): void;
    _handleShakaBufferingEvents(e: any): void;
    _onBuffering(): void;
    _onBufferfull(): void;
    _loaded(): void;
    _fillLevels(): void;
    _startToSendStats(): void;
    _sendStats(): void;
    _setupError(err: any): void;
    _onError(err: any): any;
    _onAdaptation(): void;
    _updateSettings(): void;
    _destroy(): void;
}
export default DashShakaPlayback;
