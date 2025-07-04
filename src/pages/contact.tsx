import React, { useState } from 'react';
import Head from 'next/head';
import styles from '../styles/Contact.module.css';

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`送信内容:\n名前: ${form.name}\nメール: ${form.email}\n内容: ${form.message}`);
  };

  return (
    <>
      <Head>
        <title>お問い合わせ - Reactポートフォリオ</title>
      </Head>
      <main className={styles.contactContainer}>
        <h1>お問い合わせ</h1>
        <form onSubmit={handleSubmit} className={styles.formLayout}>
          <label>
            お名前
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className={styles.inputField}
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
              className={styles.inputField}
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
              className={styles.inputField}
            />
          </label>
          <button type="submit" className={styles.submitButton}>
            送信する
          </button>
        </form>
      </main>
    </>
  );
}
