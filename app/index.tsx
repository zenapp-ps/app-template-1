import type { CSSProperties } from 'react'

export default function App () {
  return (
    <main style={styles.page}>
      <section style={styles.panel}>
        <p style={styles.eyebrow}>Zenapp template</p>
        <h1 style={styles.title}>Ready for your prompt</h1>
        <p style={styles.copy}>
          This starter app is intentionally small so Zenapp can replace it with
          the product requested by the user.
        </p>
        <button style={styles.button}>Hello World</button>
      </section>
    </main>
  )
}

const styles: Record<string, CSSProperties> = {
  page: {
    minHeight: '100vh',
    display: 'grid',
    placeItems: 'center',
    padding: 24,
    background: '#f5f7fb'
  },
  panel: {
    width: 'min(100%, 560px)',
    padding: 32,
    border: '1px solid #d9e0ec',
    borderRadius: 8,
    background: '#ffffff',
    boxShadow: '0 18px 48px rgba(29, 36, 51, 0.08)'
  },
  eyebrow: {
    margin: '0 0 12px',
    color: '#4b6fcb',
    fontSize: 13,
    fontWeight: 700,
    letterSpacing: 0,
    textTransform: 'uppercase'
  },
  title: {
    margin: '0 0 16px',
    color: '#172033',
    fontSize: 36,
    lineHeight: 1.1,
    letterSpacing: 0
  },
  copy: {
    margin: '0 0 24px',
    color: '#4d5d75',
    fontSize: 16,
    lineHeight: 1.55
  },
  button: {
    minHeight: 44,
    padding: '0 18px',
    border: 0,
    borderRadius: 6,
    color: '#ffffff',
    background: '#1f7a5c',
    cursor: 'pointer',
    fontWeight: 700
  }
}
