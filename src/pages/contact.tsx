import React, { useState } from 'react';
import Head from 'next/head';

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`送信内容:\n名前: ${form.name}\nメール: ${form.email}\n内容: ${form.message}`);
    // フォーム送信処理は今は仮で
  };

  return (
    <>
      <Head>
        <title>お問い合わせ - Reactポートフォリオ</title>
      </Head>
      <main style={{ padding: '2rem', color: '#222', maxWidth: '600px', margin: '0 auto' }}>
        <h1>お問い合わせ</h1>
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <label>
            お名前
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              style={{ width: '100%', padding: '0.5rem' }}
            />
          </label>
          <label>
            メールアドレス
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              style={{ width: '100%', padding: '0.5rem' }}
            />
          </label>
          <label>
            お問い合わせ内容
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              required
              rows={5}
              style={{ width: '100%', padding: '0.5rem' }}
            />
          </label>
          <button type="submit" style={{ padding: '0.75rem', background: '#222', color: '#fff', border: 'none' }}>
            送信する
          </button>
        </form>
      </main>
    </>
  );
}
