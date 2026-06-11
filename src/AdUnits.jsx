import { useState } from 'react'
import styles from './AdUnits.module.css'

// Takeover / Announcement
export function TakeoverAd({ visible }) {
  const [dismissed, setDismissed] = useState(false)
  if (!visible || dismissed) return null
  return (
    <a href="https://www.betterhelp.com" target="_blank" rel="noopener noreferrer" className={styles.takeoverLink}>
      <div className={styles.takeover}>
        <div className={styles.takeoverLeft}>
          <span className={styles.sponsoredBadge}>SPONSORED</span>
          <span className={styles.takeoverText}>
            <strong>BetterHelp</strong> — Talk to a licensed therapist today. First week free.
          </span>
        </div>
        <div className={styles.takeoverRight}>
          <span className={styles.takeoverCta}>Try now →</span>
          <button className={styles.dismissX} onClick={e => { e.preventDefault(); e.stopPropagation(); setDismissed(true) }}>✕</button>
        </div>
      </div>
    </a>
  )
}

// Banner Display Ad
export function BannerAd({ visible }) {
  if (!visible) return null
  return (
    <a href="https://www.mint.com" target="_blank" rel="noopener noreferrer" className={styles.bannerLink}>
      <div className={styles.banner}>
        <div className={styles.bannerLeft}>
          <div className={styles.bannerIcon}>💳</div>
          <div>
            <div className={styles.bannerHeadline}>Mint — Build credit while you spend</div>
            <div className={styles.bannerSub}>No annual fee. Apply in 2 minutes. No credit check required.</div>
          </div>
        </div>
        <span className={styles.bannerCta}>Apply Now</span>
      </div>
    </a>
  )
}

// Native In-Feed Ad
export function NativeAd({ visible }) {
  if (!visible) return null
  return (
    <a href="https://www.coursera.org" target="_blank" rel="noopener noreferrer" className={styles.nativeLink}>
      <div className={styles.nativeCard}>
        <div className={styles.nativeMeta}>
          <div className={styles.nativeAvatar}>🎓</div>
          <span className={styles.nativeAuthor}>u/Coursera_Official</span>
          <span className={styles.dot}>•</span>
          <span className={styles.promotedLabel}>Promoted</span>
        </div>
        <div className={styles.nativeBody}>
          <h3 className={styles.nativeTitle}>We helped 2M people switch careers into tech. Here's what they all started with.</h3>
          <p className={styles.nativeText}>Thousands of learners have landed jobs in AI, data science, and software engineering — starting from zero. Most began with one free course. See what made the difference.</p>
        </div>
        <div className={styles.nativeActions}>
          <span className={styles.nativeCta}>Enroll free →</span>
          <span className={styles.actionBtn}>💬 243</span>
          <span className={styles.actionBtn}>↗ Share</span>
        </div>
      </div>
    </a>
  )
}

// Video Ad
export function VideoAd({ visible }) {
  const [playing, setPlaying] = useState(false)
  const [skipped, setSkipped] = useState(false)
  const [countdown, setCountdown] = useState(5)

  if (!visible) return null

  function handlePlay(e) {
    e.preventDefault()
    setPlaying(true)
    let c = 5
    const t = setInterval(() => {
      c--
      setCountdown(c)
      if (c <= 0) clearInterval(t)
    }, 1000)
  }

  if (skipped) return (
    <div className={styles.videoSkipped}>Video ad skipped.</div>
  )

  return (
    <div className={styles.videoCard}>
      <div className={styles.videoMeta}>
        <div className={styles.nativeAvatar}>💊</div>
        <span className={styles.nativeAuthor}>u/HimsAndHers_Official</span>
        <span className={styles.dot}>•</span>
        <span className={styles.promotedLabel}>Promoted</span>
      </div>
      <a href="https://www.forhims.com" target="_blank" rel="noopener noreferrer">
        <div className={styles.videoPlayer} onClick={!playing ? handlePlay : undefined}>
          {!playing ? (
            <div className={styles.videoThumb}>
              <div className={styles.playBtn}>▶</div>
              <p className={styles.videoLabel}>Hims & Hers — Feel like yourself again</p>
            </div>
          ) : (
            <div className={styles.videoPlaying}>
              <div className={styles.videoTopBar}>
                <span className={styles.adChip}>AD</span>
                {countdown > 0
                  ? <span className={styles.skipInfo}>Skip in {countdown}s</span>
                  : <button className={styles.skipNow} onClick={e => { e.preventDefault(); e.stopPropagation(); setSkipped(true) }}>Skip Ad ›</button>
                }
              </div>
              <div className={styles.videoContent}>
                <span style={{ fontSize: 36 }}>💊</span>
                <p style={{ color: 'white', fontWeight: 600 }}>Personalized care, delivered to your door.</p>
              </div>
            </div>
          )}
        </div>
      </a>
      {playing && countdown <= 0 && (
        <button className={styles.skipFull} onClick={() => setSkipped(true)}>Skip Ad →</button>
      )}
    </div>
  )
}

// Promoted Post
export function PromotedPostAd({ visible }) {
  if (!visible) return null
  return (
    <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className={styles.nativeLink}>
      <div className={styles.nativeCard}>
        <div className={styles.nativeMeta}>
          <div className={styles.linkedInAvatar}>in</div>
          <span className={styles.nativeAuthor}>u/LinkedIn</span>
          <span className={styles.dot}>•</span>
          <span className={styles.promotedLabel}>Promoted</span>
        </div>
        <div className={styles.nativeBody}>
          <h3 className={styles.nativeTitle}>500,000 people landed new jobs through LinkedIn in 2024. Here's the one thing they all did first.</h3>
          <p className={styles.nativeText}>Turns out it wasn't updating their resume or applying to hundreds of jobs. The single biggest factor? Building a strong LinkedIn presence before they needed it.</p>
        </div>
        <div className={styles.nativeActions}>
          <span className={styles.nativeCta} style={{ background: '#0a66c2' }}>See how →</span>
          <span className={styles.actionBtn}>💬 412</span>
          <span className={styles.actionBtn}>↗ Share</span>
        </div>
      </div>
    </a>
  )
}

// Sidebar Display Ad
export function SidebarAd({ visible }) {
  if (!visible) return null
  return (
    <a href="https://www.nordvpn.com" target="_blank" rel="noopener noreferrer" className={styles.sidebarLink}>
      <div className={styles.sidebarAd}>
        <div className={styles.sidebarAdLabel}>Sponsored</div>
        <div className={styles.sidebarImg}>
          <span style={{ fontSize: 32 }}>🔒</span>
          <span style={{ fontSize: 11, color: '#7dd3d0', marginTop: 4 }}>NordVPN</span>
        </div>
        <div className={styles.sidebarHeadline}>Stay private online</div>
        <div className={styles.sidebarSub}>68% off + 3 months free. Limited time offer.</div>
        <span className={styles.sidebarBtn}>Get the deal</span>
      </div>
    </a>
  )
}
