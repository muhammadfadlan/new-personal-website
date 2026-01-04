// Karena kita menggunakan file terpisah, kita perlu menyalin data projectsData 
// atau mengimpornya. Untuk kesederhanaan single-file tanpa backend, 
// saya menempatkan data di script.js. Namun, di environment asli, 
// data ini sebaiknya dimuat dari script.js global atau file JSON.
// Di sini saya mendefinisikan ulang data agar file ini mandiri (standalone)
// atau Anda bisa menghapus bagian ini dan hanya mengambil dari window.projectsData 
// jika script.js dimuat sebelumnya.

// Catatan: Agar kode tetap bersih, asumsikan projectsData tersedia secara global 
// atau kita mendefinisikan ulang di sini. Untuk tujuan demo ini, saya menulis ulang datanya.
const projectData = [
    {
        id: 1,
        title: "Credit Scoring Dashboard",
        category: "Data Analysis",
        description: `
            <p>Tujuan utama dari proyek ini adalah menyediakan alat monitoring real-time bagi tim manajemen risiko untuk menilai kesehatan portofolio kredit. Sebelumnya, proses ini dilakukan secara manual menggunakan Excel yang seringkali terlambat mendeteksi anomali.</p>
            <p>Proses pembuatan dimulai dengan pembersihan data historis transaksi nasabah menggunakan Python. Data kemudian dihubungkan dengan database SQL. Visualisasi dibangun di Power BI dengan fokus pada kejelasan data.</p>
            <p>Hasil akhirnya adalah dashboard yang memungkinkan tim melihat tren penurunan kualitas kredit (NPL) secara instan dan mengambil keputusan mitigasi risiko lebih cepat sebesar 30%.</p>
        `,
        features: [
            "Monitoring portofolio kredit secara real-time",
            "Deteksi anomali risiko otomatis berdasarkan ambang batas",
            "Visualisasi interaktif dengan filter dinamis",
            "Laporan otomatis yang dapat diekspor ke PDF"
        ],
        image: "https://picsum.photos/seed/finance/800/450",
        tech: ["Power BI", "SQL", "Excel", "Python"]
    },
    {
        id: 2,
        title: "Digital Archiving System",
        category: "Automation",
        description: `
            <p>Mengubah ribuan dokumen fisik menjadi format digital yang dapat dicari (searchable). Sistem ini bertujuan untuk mengurangi waktu penelusuran dokumen manual yang memakan waktu hingga berjam-jam.</p>
            <p>Saya menggunakan Python untuk membangun skrip OCR (Optical Character Recognition) yang membaca teks dari gambar yang dipindai (scanned documents). Sistem ini kemudian menamai file secara otomatis berdasarkan metadata yang terbaca dan menyimpannya di Cloud Storage.</p>
            <p>Proyek ini berhasil mengurangi waktu pencarian dokumen hingga 70% dan meminimalisir risiko kehilangan dokumen fisik.</p>
        `,
        features: [
            "Otomatisasi penamaan file menggunakan OCR",
            "Pencarian kata kunci dokumen super cepat",
            "Integrasi dengan Cloud Storage",
            "Antarmuka web sederhana untuk upload file"
        ],
        image: "https://picsum.photos/seed/automation/800/450",
        tech: ["Python", "Tesseract OCR", "Cloud Storage API", "Docker"]
    },
    {
        id: 3,
        title: "AI-Assisted Copywriting",
        category: "Creative",
        description: `
            <p>Sebuah studi kasus tentang bagaimana menggunakan teknik Prompt Engineering tingkat lanjut untuk menghasilkan konten pemasaran dan artikel teknis yang berkualitas.</p>
            <p>Proyek ini melibatkan eksplorasi berbagai model bahasa besar (LLM) untuk menyempurnakan tone of voice, struktur artikel SEO, dan ideasi konten. Saya mengembangkan sistem prompt yang terstruktur untuk memastikan output AI tetap relevan dan manusiawi.</p>
            <p>Hasilnya adalah kumpulan template prompt yang dapat mengurangi waktu penulisan draft pertama hingga 50%.</p>
        `,
        features: [
            "Template prompt struktur untuk artikel SEO",
            "Ekstraksi ide konten otomatis dari topik tertentu",
            "Analisis tone of voice otomatis",
            "Iterasi penyuntingan AI-to-Human yang efisien"
        ],
        image: "https://picsum.photos/seed/writing/800/450",
        tech: ["ChatGPT API", "Claude AI", "Python", "NLP"]
    }
];

document.addEventListener("DOMContentLoaded", () => {
    // Mengambil ID dari URL (?id=1)
    const urlParams = new URLSearchParams(window.location.search);
    const projectId = urlParams.get('id');

    // Cari data proyek berdasarkan ID
    const project = projectData.find(p => p.id == projectId);

    // Elemen DOM
    const pTitle = document.getElementById('p-title');
    const pCategory = document.getElementById('p-category');
    const pDescription = document.getElementById('p-description');
    const pFeatures = document.getElementById('p-features');
    const pImage = document.getElementById('p-image');
    const pTech = document.getElementById('p-tech');

    if (project) {
        // Render Konten
        pTitle.innerText = project.title;
        pCategory.innerText = project.category;
        pDescription.innerHTML = project.description;
        pImage.src = project.image;

        // Render Features
        project.features.forEach(feature => {
            const li = document.createElement('li');
            li.innerText = feature;
            pFeatures.appendChild(li);
        });

        // Render Tech Stack
        project.tech.forEach(tech => {
            const span = document.createElement('span');
            span.className = 'tech-pill';
            // Menambahkan ikon placeholder kecil untuk tech
            span.innerHTML = `<i class="fas fa-code"></i> ${tech}`;
            pTech.appendChild(span);
        });

        // Update Document Title
        document.title = `${project.title} | Muhammad Fadlan`;

    } else {
        // Handle jika ID tidak ditemukan (Redirect kembali ke portfolio)
        window.location.href = "index.html#portfolio";
    }

    // --- Mobile Navigation Toggle Logic (Same as main) ---
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const navLinks = document.getElementById('navLinks');

    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            const icon = mobileMenuBtn.querySelector('i');
            if (navLinks.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    }
});
