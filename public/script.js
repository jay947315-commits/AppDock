:root {
  --bg: #07111f;
  --panel: rgba(15, 23, 42, 0.92);
  --panel-alt: rgba(17, 24, 39, 0.88);
  --primary: #5eead4;
  --primary-strong: #2dd4bf;
  --text: #e5eefb;
  --muted: #9db0c8;
  --line: rgba(148, 163, 184, 0.18);
  --success: #34d399;
  --danger: #f87171;
  --shadow: 0 24px 70px rgba(15, 23, 42, 0.45);
}

* {
  box-sizing: border-box;
}

html, body {
  margin: 0;
  min-height: 100%;
  font-family: 'Inter', sans-serif;
  background: radial-gradient(circle at top, rgba(45, 212, 191, 0.18), transparent 30%), var(--bg);
  color: var(--text);
}

body {
  display: flex;
  justify-content: center;
  padding: 32px 18px 48px;
}

.page-shell {
  width: min(1200px, 100%);
}

.topbar {
  margin-bottom: 24px;
}

.brand-wrap {
  display: inline-flex;
  align-items: center;
  gap: 14px;
}

.brand-mark {
  width: 42px;
  height: 42px;
  border-radius: 14px;
  display: grid;
  place-items: center;
  background: linear-gradient(135deg, var(--primary), #7c3aed);
  color: #03111d;
  font-weight: 800;
  box-shadow: var(--shadow);
}

.eyebrow {
  margin: 0 0 6px;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  font-size: 11px;
  color: var(--muted);
}

h1, h2, p {
  margin: 0;
}

h1 {
  font-size: clamp(1.7rem, 4vw, 2.5rem);
}

.dashboard {
  display: grid;
  grid-template-columns: 1.1fr 1fr;
  gap: 24px;
}

.card {
  background: var(--panel);
  border: 1px solid var(--line);
  border-radius: 22px;
  box-shadow: var(--shadow);
}

.upload-card,
.list-card {
  padding: 22px;
}

.section-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 18px;
}

.upload-form {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.field-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 18px;
}

label {
  display: flex;
  flex-direction: column;
  gap: 8px;
  color: var(--muted);
  font-size: 0.9rem;
}

label span {
  color: var(--text);
  font-weight: 600;
}

input,
textarea,
button {
  font: inherit;
}

input[type='text'],
input[type='file'],
textarea {
  width: 100%;
  border: 1px solid var(--line);
  background: rgba(15, 23, 42, 0.75);
  color: var(--text);
  border-radius: 14px;
  padding: 13px 14px;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
}

input[type='text']:focus,
textarea:focus {
  outline: none;
  border-color: rgba(94, 234, 212, 0.8);
  box-shadow: 0 0 0 3px rgba(94, 234, 212, 0.15);
}

textarea {
  resize: vertical;
  min-height: 120px;
}

.full-width {
  grid-column: 1 / -1;
}

.file-picker input {
  padding: 12px 14px;
}

.primary-btn {
  align-self: flex-start;
  border: none;
  border-radius: 12px;
  padding: 12px 18px;
  font-weight: 700;
  color: #06282f;
  background: linear-gradient(135deg, var(--primary), var(--primary-strong));
  cursor: pointer;
  transition: transform 0.15s ease, box-shadow 0.2s ease;
  box-shadow: 0 12px 28px rgba(45, 212, 191, 0.3);
}

.primary-btn:hover {
  transform: translateY(-1px);
}

.message {
  min-height: 22px;
  margin-top: 8px;
  font-size: 0.95rem;
  color: var(--muted);
}

.message.success {
  color: var(--success);
}

.message.error {
  color: var(--danger);
}

.app-list {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.app-item {
  background: var(--panel-alt);
  border: 1px solid var(--line);
  border-radius: 18px;
  padding: 16px;
}

.app-top {
  display: flex;
  justify-content: space-between;
  gap: 12px;
  align-items: flex-start;
}

.app-name {
  font-size: 1.1rem;
  font-weight: 700;
  margin-bottom: 6px;
}

.app-meta {
  color: var(--muted);
  font-size: 0.88rem;
  margin-bottom: 10px;
}

.app-description {
  color: #d5e1f4;
  line-height: 1.5;
  margin-bottom: 12px;
}

.app-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  flex-wrap: wrap;
}

.app-tag {
  display: inline-flex;
  align-items: center;
  padding: 7px 10px;
  border-radius: 999px;
  background: rgba(94, 234, 212, 0.12);
  color: var(--primary);
  font-size: 0.8rem;
  font-weight: 700;
}

.app-download {
  display: inline-flex;
  align-items: center;
  padding: 9px 12px;
  border-radius: 10px;
  background: rgba(96, 165, 250, 0.14);
  color: #dbeafe;
  text-decoration: none;
  font-weight: 600;
}

.empty-state {
  border: 1px dashed var(--line);
  border-radius: 16px;
  padding: 26px 18px;
  text-align: center;
  color: var(--muted);
  background: rgba(15, 23, 42, 0.4);
}

@media (max-width: 850px) {
  .dashboard {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 560px) {
  .field-grid {
    grid-template-columns: 1fr;
  }

  .app-top,
  .app-footer {
    flex-direction: column;
    align-items: flex-start;
  }
}
