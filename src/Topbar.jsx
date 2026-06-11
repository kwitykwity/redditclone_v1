import styles from './Topbar.module.css'

export default function Topbar() {
  return (
    <header className={styles.bar}>
      <div className={styles.left}>
        <div className={styles.logo}>
          <span className={styles.logoIcon}>⬤</span>
          <span className={styles.logoText}>reddit</span>
        </div>
      </div>
      <div className={styles.center}>
        <div className={styles.searchWrap}>
          <span className={styles.searchIcon}>🔍</span>
          <div className={styles.searchTag}>
            <span className={styles.searchTagIcon}>⬤</span>
            r/AITAH
            <button className={styles.searchTagX}>✕</button>
          </div>
          <input className={styles.searchInput} placeholder="Search in r/AITAH" />
        </div>
      </div>
      <div className={styles.right}>
        <button className={styles.iconBtn}>📺</button>
        <button className={styles.iconBtn}>💬</button>
        <button className={styles.iconBtn}>➕</button>
        <button className={styles.iconBtn}>🔔</button>
        <div className={styles.avatar}>🧑</div>
      </div>
    </header>
  )
}
