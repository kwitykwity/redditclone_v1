import { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { POSTS, COMMENTS, FLAIRS } from './data.js'
import styles from './ThreadView.module.css'

function fmtNum(n) {
  if (n >= 1000) return (n / 1000).toFixed(1) + 'k'
  return n
}

function Comment({ comment, depth = 0 }) {
  const [votes, setVotes] = useState(comment.votes)
  const [voted, setVoted] = useState(null)
  const [collapsed, setCollapsed] = useState(false)
  const [replying, setReplying] = useState(false)
  const [replyText, setReplyText] = useState('')
  const [replies, setReplies] = useState(comment.replies || [])

  function vote(dir) {
    if (voted === dir) { setVoted(null); setVotes(comment.votes) }
    else {
      const prev = voted ? (voted === 'up' ? -1 : 1) : 0
      setVoted(dir); setVotes(comment.votes + prev + (dir === 'up' ? 1 : -1))
    }
  }

  function submitReply() {
    if (!replyText.trim()) return
    const newReply = {
      id: `r_${Date.now()}`,
      author: 'you',
      avatar: '🧑',
      votes: 1,
      timeAgo: 'just now',
      text: replyText.trim(),
      replies: []
    }
    setReplies(prev => [newReply, ...prev])
    setReplyText('')
    setReplying(false)
  }

  return (
    <div className={styles.commentWrap} style={{ marginLeft: depth > 0 ? 16 : 0 }}>
      {depth > 0 && (
        <div className={styles.threadLine} onClick={() => setCollapsed(c => !c)} title="Click to collapse" />
      )}
      <div className={styles.commentInner}>
        <div className={styles.commentMeta}>
          <div className={styles.avatar}>{comment.avatar}</div>
          <span className={styles.author}>u/{comment.author}</span>
          <span className={styles.time}>{comment.timeAgo}</span>
          {collapsed && (
            <button className={styles.expandBtn} onClick={() => setCollapsed(false)}>▶ expand</button>
          )}
        </div>

        {!collapsed && (
          <>
            <p className={styles.commentText}>{comment.text}</p>
            <div className={styles.commentActions}>
              <div className={styles.voteRow}>
                <button className={`${styles.voteBtn} ${voted === 'up' ? styles.votedUp : ''}`} onClick={() => vote('up')}>↑</button>
                <span className={`${styles.voteCount} ${voted === 'up' ? styles.countUp : voted === 'down' ? styles.countDown : ''}`}>{fmtNum(votes)}</span>
                <button className={`${styles.voteBtn} ${styles.downBtn} ${voted === 'down' ? styles.votedDown : ''}`} onClick={() => vote('down')}>↓</button>
              </div>
              <button className={styles.actionBtn} onClick={() => setReplying(r => !r)}>💬 Reply</button>
              <button className={styles.actionBtn}>↗ Share</button>
              <button className={styles.actionBtn} onClick={() => setCollapsed(true)}>— Collapse</button>
            </div>

            {replying && (
              <div className={styles.replyBox}>
                <textarea
                  className={styles.replyInput}
                  placeholder={`Reply to u/${comment.author}...`}
                  value={replyText}
                  onChange={e => setReplyText(e.target.value)}
                  rows={3}
                  autoFocus
                />
                <div className={styles.replyActions}>
                  <button className={styles.replyCancel} onClick={() => { setReplying(false); setReplyText('') }}>Cancel</button>
                  <button
                    className={styles.replySubmit}
                    onClick={submitReply}
                    disabled={!replyText.trim()}
                  >Reply</button>
                </div>
              </div>
            )}

            {replies.length > 0 && depth < 5 && (
              <div className={styles.replies}>
                {replies.map(reply => (
                  <Comment key={reply.id} comment={reply} depth={depth + 1} />
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  )
}

export default function ThreadView() {
  const { postId } = useParams()
  const navigate = useNavigate()
  const post = POSTS.find(p => p.id === parseInt(postId))
  const initialComments = COMMENTS[parseInt(postId)] || []
  const flair = post ? (FLAIRS[post.flair] || FLAIRS.INFO) : null
  const [votes, setVotes] = useState(post?.votes || 0)
  const [voted, setVoted] = useState(null)
  const [comments, setComments] = useState(initialComments)
  const [newComment, setNewComment] = useState('')
  const [commentCount, setCommentCount] = useState(post?.comments || 0)

  if (!post) return (
    <div className={styles.notFound}>
      Post not found. <button onClick={() => navigate('/')}>← Back</button>
    </div>
  )

  function vote(dir) {
    if (voted === dir) { setVoted(null); setVotes(post.votes) }
    else {
      const prev = voted ? (voted === 'up' ? -1 : 1) : 0
      setVoted(dir); setVotes(post.votes + prev + (dir === 'up' ? 1 : -1))
    }
  }

  function submitComment() {
    if (!newComment.trim()) return
    const c = {
      id: `c_${Date.now()}`,
      author: 'you',
      avatar: '🧑',
      votes: 1,
      timeAgo: 'just now',
      text: newComment.trim(),
      replies: []
    }
    setComments(prev => [c, ...prev])
    setCommentCount(n => n + 1)
    setNewComment('')
  }

  return (
    <div className={styles.page}>
      <div className={styles.layout}>
        <div className={styles.main}>
          <button className={styles.backBtn} onClick={() => navigate('/')}>← Back to r/AITAH</button>

          <div className={styles.postCard}>
            <div className={styles.postMeta}>
              <div className={styles.postAvatar}>{post.avatar}</div>
              <span className={styles.postAuthor}>u/{post.author}</span>
              <span className={styles.dot}>•</span>
              <span className={styles.postTime}>{post.timeAgo}</span>
              <button className={styles.moreBtn}>•••</button>
            </div>
            <div className={styles.flairWrap}>
              <span className={styles.flair} style={{ background: flair.bg, color: flair.color, borderColor: flair.border }}>
                {flair.label}
              </span>
            </div>
            <h1 className={styles.postTitle}>{post.title}</h1>
            <p className={styles.postBody}>{post.body}</p>
            <div className={styles.postActions}>
              <div className={styles.voteRow}>
                <button className={`${styles.voteBtn} ${voted === 'up' ? styles.votedUp : ''}`} onClick={() => vote('up')}>↑</button>
                <span className={`${styles.voteCount} ${voted === 'up' ? styles.countUp : voted === 'down' ? styles.countDown : ''}`}>{fmtNum(votes)}</span>
                <button className={`${styles.voteBtn} ${styles.downBtn} ${voted === 'down' ? styles.votedDown : ''}`} onClick={() => vote('down')}>↓</button>
              </div>
              <button className={styles.actionBtn}>💬 {fmtNum(commentCount)} Comments</button>
              <button className={styles.actionBtn}>↗ Share</button>
              <button className={styles.actionBtn}>🔖 Save</button>
            </div>
          </div>

          <div className={styles.commentsSection}>
            <div className={styles.commentsHeader}>
              <span>{fmtNum(commentCount)} Comments</span>
              <select className={styles.sortSelect}>
                <option>Best</option>
                <option>Top</option>
                <option>New</option>
                <option>Controversial</option>
              </select>
            </div>

            {/* Comment input box */}
            <div className={styles.commentInputBox}>
              <div className={styles.commentInputMeta}>
                <div className={styles.commentInputAvatar}>🧑</div>
                <span className={styles.commentInputLabel}>Comment as <strong>u/you</strong></span>
              </div>
              <textarea
                className={styles.commentInput}
                placeholder="What are your thoughts?"
                value={newComment}
                onChange={e => setNewComment(e.target.value)}
                rows={4}
              />
              <div className={styles.commentInputActions}>
                <button
                  className={styles.commentSubmit}
                  onClick={submitComment}
                  disabled={!newComment.trim()}
                >Comment</button>
              </div>
            </div>

            {comments.length > 0
              ? comments.map(comment => <Comment key={comment.id} comment={comment} depth={0} />)
              : <p className={styles.noComments}>No comments yet. Be the first!</p>
            }
          </div>
        </div>

        <aside className={styles.sidebar}>
          <div className={styles.sidebarCard}>
            <div className={styles.sidebarTitle}>r/AITAH</div>
            <p className={styles.sidebarDesc}>A place to determine who is the a**hole in any given situation.</p>
            <div className={styles.sidebarStats}>
              <div><strong>4.2M</strong><span>Members</span></div>
              <div><strong>3,847</strong><span>Online</span></div>
            </div>
            <button className={styles.joinBtn}>Join</button>
            <button className={styles.createBtn}>＋ Create Post</button>
          </div>
        </aside>
      </div>
    </div>
  )
}
