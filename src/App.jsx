import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Topbar from './Topbar.jsx'
import LeftSidebar from './LeftSidebar.jsx'
import SubHeader from './SubHeader.jsx'
import PostCard from './PostCard.jsx'
import Sidebar from './Sidebar.jsx'
import ThreadView from './ThreadView.jsx'
import { TakeoverAd, BannerAd, NativeAd, VideoAd, PromotedPostAd, SidebarAd } from './AdUnits.jsx'
import { POSTS } from './data.js'
import styles from './App.module.css'

const PROMOTED_POST = {
  id: 99,
  author: 'Omvoh',
  avatar: '💬',
  flair: 'NTA',
  title: "Don't leave this message on read. Talk to your doctor and have the Omvoh Convo today.",
  body: "Starting a conversation about your health can feel awkward. Omvoh helps you find the words. Talk to your doctor today.",
  votes: 0,
  comments: 0,
}

function Feed() {
  return (
    <main className={styles.main}>
      <SubHeader />
      <div className={styles.content}>
        <div className={styles.feed}>
          <div className={styles.sortBar}>
            <button className={`${styles.sortBtn} ${styles.active}`}>Best ∨</button>
            <button className={styles.viewBtn}>⊞ ∨</button>
          </div>
          <div className={styles.highlights}>
            <div className={styles.highlightsHeader}>
              <span>⚑</span> Community highlights
              <button className={styles.toggle}>∧</button>
            </div>
            <div className={styles.highlightCards}>
              <div className={styles.hlCard}>
                <div className={styles.hlTitle}>New rules: Account age and karma minimums</div>
                <div className={styles.hlMeta}>77 votes • 1 comment</div>
                <div className={styles.hlTag}>⚑ Announcement</div>
              </div>
              <div className={styles.hlCard}>
                <div className={styles.hlTitle}>New rule: no political trolling</div>
                <div className={styles.hlMeta}>656 votes • 1 comment</div>
                <div className={styles.hlTag}>⚑ Announcement</div>
              </div>
            </div>
          </div>

          <TakeoverAd visible={true} />
          <PostCard post={POSTS[0]} />
          <BannerAd visible={true} />
          <PostCard post={POSTS[1]} />
          <NativeAd visible={true} />
          <PostCard post={POSTS[2]} />
          <VideoAd visible={true} />
          <PostCard post={POSTS[3]} />
          <PostCard post={PROMOTED_POST} promoted />
          <PostCard post={POSTS[4]} />
          <PostCard post={POSTS[5]} />
          <PostCard post={POSTS[6]} />
          <PostCard post={POSTS[7]} />
        </div>
        <div className={styles.sidebarCol}>
          <SidebarAd visible={true} />
          <Sidebar />
        </div>
      </div>
    </main>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <div className={styles.app}>
        <Topbar />
        <div className={styles.layout}>
          <LeftSidebar />
          <Routes>
            <Route path="/" element={<Feed />} />
            <Route path="/post/:postId" element={<ThreadView />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}
