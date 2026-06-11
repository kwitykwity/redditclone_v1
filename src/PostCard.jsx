import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FLAIRS } from './data.js'
import styles from './PostCard.module.css'

function fmtNum(n) {
  if (n >= 1000) return (n / 1000).toFixed(1) + 'k'
  return n
}

export default function PostCard({ post, promoted }) {
  const [votes, setVotes] = useState(post.votes)
  const [voted, setVoted] = useState(null)
  const flair = FLAIRS[post.flair] || FLAIRS.INFO
  const navigate = useNavigate()

  function vote(dir) {
    if (voted === dir) { setVoted(null); setVotes(post.votes) }
    else {
      const prev = voted ? (voted === 'up' ? -1 : 1) : 0
      setVoted(dir); setVotes(post.votes + prev + (dir === 'up' ? 1 : -1))
    }
  }

  return (
    <div className={styles.card}>
      <div className={styles.meta}>
        <div className={styles.avatar}>{post.avatar}</div>
        <span className={styles.author}>u/{post.author}</span>
        {promoted && <span className={styles.promoted}>• Promoted</span>}
        {!promoted && <><span className={styles.dot}>•</span><span className={styles.time}>{post.timeAgo}</span></>}
        <button className={styles.moreBtn}>•••</button>
      </div>
      <div className={styles.body}>
        <div className={styles.flairWrap}>
          <span className={styles.flair} style={{ background: flair.bg, color: flair.color, borderColor: flair.border }}>
            {flair.label}
          </span>
        </div>
        <h2 className={styles.title} onClick={() => !promoted && navigate(`/post/${post.id}`)}>{post.title}</h2>
        {post.body && <p className={styles.bodyText} onClick={() => !promoted && navigate(`/post/${post.id}`)}>{post.body}</p>}
      </div>
      <div className={styles.actions}>
        <div className={styles.voteRow}>
          <button className={`${styles.voteBtn} ${voted === 'up' ? styles.votedUp : ''}`} onClick={() => vote('up')}>↑</button>
          <span className={`${styles.voteCount} ${voted === 'up' ? styles.countUp : voted === 'down' ? styles.countDown : ''}`}>{fmtNum(votes)}</span>
          <button className={`${styles.voteBtn} ${styles.downBtn} ${voted === 'down' ? styles.votedDown : ''}`} onClick={() => vote('down')}>↓</button>
        </div>
        <button className={styles.actionBtn} onClick={() => !promoted && navigate(`/post/${post.id}`)}>
          💬 {fmtNum(post.comments)}
        </button>
        <button className={styles.actionBtn}>🔖</button>
        <button className={styles.actionBtn}>↗ Share</button>
      </div>
    </div>
  )
}
