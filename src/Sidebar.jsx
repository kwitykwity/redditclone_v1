import styles from './Sidebar.module.css'

const RULES = [
  'No completely fake posts',
  'No AI or Bot post and comments',
  'No karma farming',
  'Be civil in comments',
  'No doxxing or personal info',
]

export default function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.card}>
        <div className={styles.title}>AITAH</div>
        <p className={styles.desc}>A place to ask if you were, in fact, the asshole in a particular situation. AITAH is a judgment sub, not one to ask for opinions or advice. Relationship conflicts and hypotheticals (would I be the asshole if) are allowed. Do not use AI in any form, even for editing or translation - if you have to ask if it's AI, don't use it.</p>
        <div className={styles.metaRow}><span>📅</span> Created Mar 17, 2021</div>
        <div className={styles.metaRow}><span>🌐</span> Public</div>
        <div className={styles.stats}>
          <div className={styles.stat}><strong>2M</strong><span>Weekly visitors</span></div>
          <div className={styles.stat}><strong>80K</strong><span>Weekly contributions</span></div>
        </div>
        <button className={styles.guideBtn}>📋 Community Guide</button>
        <button className={styles.joinBtn}>Join</button>
        <button className={styles.createBtn}>＋ Create Post</button>
      </div>

      <div className={styles.card}>
        <div className={styles.rulesTitle}>R/AITAH RULES</div>
        {RULES.map((rule, i) => (
          <div key={i} className={styles.rule}>
            <span className={styles.ruleNum}>{i + 1}</span>
            <span className={styles.ruleText}>{rule}</span>
            <span className={styles.chevron}>∨</span>
          </div>
        ))}
      </div>
    </aside>
  )
}
