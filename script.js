// Data Project Disimpan di sini agar bisa diakses oleh halaman lain
// Namun untuk arsitektur yang lebih kompleks, ini biasanya disimpan di file JSON terpisah.
const projectsData = [
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

// --- Mobile Navigation Toggle ---
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

// Close menu on link click
const navItems = document.querySelectorAll('.nav-links a');
navItems.forEach(item => {
    item.addEventListener('click', () => {
        navLinks.classList.remove('active');
        const toggleIcon = document.querySelector('.mobile-toggle i');
        if(toggleIcon) {
            toggleIcon.classList.remove('fa-times');
            toggleIcon.classList.add('fa-bars');
        }
    });
});

// --- Contact Form Handling ---
const contactForm = document.getElementById('contactForm');
const toast = document.getElementById('toast');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const btn = contactForm.querySelector('button');
        const originalText = btn.innerText;
        
        btn.innerText = 'Mengirim...';
        btn.disabled = true;

        setTimeout(() => {
            contactForm.reset();
            btn.innerText = originalText;
            btn.disabled = false;
            showToast();
        }, 1500);
    });
}

function showToast() {
    toast.className = "show";
    setTimeout(function(){ 
        toast.className = toast.className.replace("show", ""); 
    }, 3000);
}
