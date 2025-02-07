// 'use client';
// import React, { useState } from 'react';
// import axios from 'axios';

// export default function BlogWrite() {
//   const [formData, setFormData] = useState({
//     title: '',
//     slug: '',
//     content: '',
//      status: 'publish'
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const username = 'Ashok';
// const appPassword = 'lkyr YIys tE5Y TZA0 YsWV DliM'; 
// const token = Buffer.from(`${username}:${appPassword}`, 'utf8').toString('base64');
//     axios.post('https://luxhospitals.com/blog/wp-json/wp/v2/posts', formData, {
//       headers: {
//         'Authorization': `Basic ${token}`
//       }
//     })
//     .then((response) => {
//       console.log(response);
//       alert('Blog post created successfully!');
//     })
//     .catch((error) => {
//       console.error(error);
//       alert('An error occurred. Please try again.');
//     });
//   };

//   const formStyle = {
//     display: 'flex',
//     flexDirection: 'column',
//     maxWidth: '600px',
//     margin: 'auto',
//   };

//   const inputStyle = {
//     marginBottom: '15px',
//     padding: '10px',
//     fontSize: '16px',
//     border: '2px solid #ccc',
//     borderRadius: '5px',
//   };

//   const textareaStyle = {
//     marginBottom: '15px',
//     padding: '10px',
//     fontSize: '16px',
//     border: '2px solid #ccc',
//     borderRadius: '5px',
//     height: '150px',
//   };

//   const buttonStyle = {
//     padding: '10px 20px',
//     fontSize: '16px',
//     cursor: 'pointer',
//     background: '#000',
//     color: '#fff',
//     border: 'none',
//     borderRadius: '5px',
//   };

//   return (
//     <div>
//       <h1>Write a New Blog Post</h1>
//       <form onSubmit={handleSubmit} style={formStyle}>
//         <div>
//           <label htmlFor="title">Title:</label>
//           <input type="text" id="title" name="title" value={formData.title} onChange={handleChange} style={inputStyle} required />
//         </div>
//         <div>
//           <label htmlFor="slug">Slug:</label>
//           <input type="text" id="slug" name="slug" value={formData.slug} onChange={handleChange} style={inputStyle} required />
//         </div>
//         <div>
//           <label htmlFor="content">Content:</label>
//           <textarea id="content" name="content" value={formData.content} onChange={handleChange} style={textareaStyle} rows="10" required></textarea>
//         </div>
//         <button type="submit" style={buttonStyle}>Submit</button>
//       </form>
//     </div>
//   );
// }
