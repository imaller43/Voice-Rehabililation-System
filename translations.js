// fail: translations.js
const translations = {
    ms: {
        // --- Teks Laman Log Masuk & Muka Depan ---
        loginWelcome: "Selamat Datang ke Sistem Pemulihan Suara",
        loginPrompt: "Sila Masukkan Nama Anda",
        loginBtn: "Log Masuk",
        loginProcessing: "Mengesahkan data...",
        logoTitle: "Voice Rehabilitation System",
        hiUser: "Hi, ",
        diagnoseTitle: "Diagnose your Voice",
        diagnoseRequired: "Diagnose Required First",
        currentLevelLabel: "Tahap Semasa: ",
        btnToTraining: "Ke Laman Latihan ➔",
        boxTitle: "🎙️ Rakaman Diagnostik",
        statusReady: "Status: Sedia...",
        statusRec: "Status: 🔴 Sedang merakam...",
        statusDone: "Status: 🔵 Rakaman selesai. Memproses AI...",
        statusError: "Status: ❌ Ralat mikrofon!",
        btnStart: "▶ Mula Diagnosis",
        btnStop: "🛑 Berhenti",
        resultTitle: "Keputusan Analisis:",
        resultLevel: "Tahap Dikesan: ",

        // --- Teks Laman Latihan (Navigasi) ---
        trainTitle: "Modul Latihan Klinikal",
        btnDashboard: "⬅ Kembali ke Dashboard",
        sessionProgress: "Kemajuan Sesi",
        streakLabel: "Hari Berturut-turut Lulus:",
        simulateBtn: "Simulasi Tamat Sesi (AI Auto-Grading)",

        // --- MODUL: TAHAP TERUK (SEVERE) ---
        sevTitle: "Latihan Tahap: Teruk (SEVERE)",
        sevFocus: "Fasa ini memerlukan getaran paling minimum. Fokus utamanya adalah memulihkan tisu pita suara, bukan melatih kelantangan.",
        sevPrac: "Latihan Praktikal (Gumaman / Humming): Rapatkan bibir, jarakkan sedikit gigi di dalam mulut, dan tarik nafas melalui hidung. Hembus nafas sambil mengeluarkan bunyi 'Hmmmmmm' secara berterusan pada satu nada yang paling rendah dan selesa. Tahan bunyi selama 3-5 saat. (Dilarang sebut bunyi vokal terbuka).",
        sevAI: "Ketelitian AI: Memantau kelantangan agar tidak melebihi 60 desibel. Mengira nisbah isyarat-ke-hingar untuk mengesan sebarang bunyi berbisik/angin berlebihan yang memudaratkan pita suara.",
        sevFreq: "Kekerapan: 1 sesi sehari (10 ulangan gumaman, 10 saat rehat).",
        sevBench: "Benchmark: 80% (Kekalkan selama 3 hari berturut-turut).",
        sevSide: "Aktiviti Sampingan: Rehat vokal total (dilarang bercakap) & kekalkan hidrasi dengan air suam.",

        // --- MODUL: TAHAP SEDERHANA (MODERATE) ---
        modTitle: "Latihan Tahap: Sederhana (MODERATE)",
        modFocus: "Pita suara mula pulih. Fasa ini melibatkan regangan otot untuk mendapatkan semula kelancaran dari nada rendah ke tinggi.",
        modPrac: "Latihan Praktikal (Luncuran Nada Siren): Getarkan bibir seperti bunyi enjin bot ('Brrrrr'). Keluarkan bunyi meluncur dari nada rendah ke nada tinggi, dan kembali ke nada rendah tanpa putus. Tiada sebutan Do-Re-Mi lagi.",
        modAI: "Ketelitian AI: Mengekstrak Frekuensi Asas (F0). Matriks kekeliruan membezakan sama ada ralat disebabkan oleh suara 'pecah' atau nafas terputus.",
        modFreq: "Kekerapan: 2 sesi sehari (15 ulangan luncuran naik turun).",
        modBench: "Benchmark: 85% (Kekalkan selama 5 hari berturut-turut).",
        modSide: "Aktiviti Sampingan: Sedutan wap air panas dan kurangkan perbualan bersemuka.",

        // --- MODUL: TAHAP RINGAN (MILD) ---
        mildTitle: "Latihan Tahap: Ringan (MILD)",
        mildFocus: "Fasa pembinaan stamina dan kawalan otot sepenuhnya sebelum disahkan pulih.",
        mildPrac: "Latihan 1 (Messa di Voce): Kekal pada nota pertengahan, sebut vokal 'Oooooo'. Mula perlahan, kuatkan bunyi, dan perlahankan kembali. \nLatihan 2 (Skala Vokal): Nyanyi skala 'Do-Re-Mi-Fa-Sol' menggunakan sebutan 'Ma-Ma-Ma'.",
        mildAI: "Ketelitian AI: Plot graf 2D kelantangan melawan masa. Regresi logistik mengklasifikasikan jenis permulaan suara (vocal onset) bagi memastikan tiada sentakan glotal mengejut.",
        mildFreq: "Kekerapan: 2 sesi sehari (10 ulangan Messa di Voce, 5 pusingan Skala Vokal).",
        mildBench: "Benchmark: 90% (Kekalkan selama 7 hari berturut-turut).",
        mildSide: "Aktiviti Sampingan: Senaman kardio (joging) untuk kapasiti paru-paru dan diet membaiki otot.",
        
        // --- MODUL: NORMAL ---
        normTitle: "Tahap: NORMAL (Pulih Sepenuhnya)",
        normDesc: "Tahniah! Anda telah tamat kesemua sesi pemulihan suara. Teruskan menjaga kesihatan vokal anda."
    },
    en: {
        // --- Teks Laman Log Masuk & Muka Depan ---
        loginWelcome: "Welcome to Voice Rehabilitation System",
        loginPrompt: "Please Enter Your Name",
        loginBtn: "Enter",
        loginProcessing: "Authenticating...",
        logoTitle: "Voice Rehabilitation System",
        hiUser: "Hi, ",
        diagnoseTitle: "Diagnose your Voice",
        diagnoseRequired: "Diagnose Required First",
        currentLevelLabel: "Current Level: ",
        btnToTraining: "Go to Training ➔",
        boxTitle: "🎙️ Diagnostic Recording",
        statusReady: "Status: Ready...",
        statusRec: "Status: 🔴 Recording...",
        statusDone: "Status: 🔵 Recording finished. Processing AI...",
        statusError: "Status: ❌ Microphone error!",
        btnStart: "▶ Start Diagnosis",
        btnStop: "🛑 Stop",
        resultTitle: "Analysis Result:",
        resultLevel: "Detected Level: ",

        // --- Teks Laman Latihan (Navigasi) ---
        trainTitle: "Clinical Training Module",
        btnDashboard: "⬅ Back to Dashboard",
        sessionProgress: "Session Progress",
        streakLabel: "Consecutive Days Passed:",
        simulateBtn: "Simulate Session End (Auto-Grading)",

        // --- MODUL: TAHAP TERUK (SEVERE) ---
        sevTitle: "Training Level: SEVERE",
        sevFocus: "This phase requires minimal vibration. Focus is on healing vocal tissue, not training volume.",
        sevPrac: "Humming Exercise: Close your lips, separate teeth slightly, inhale through the nose. Exhale while humming 'Hmmmmmm' continuously on the lowest comfortable pitch for 3-5 seconds. No open vowels allowed.",
        sevAI: "AI Precision: Monitors threshold under 60 decibels. Calculates signal-to-noise ratio to detect harmful whispering/wind noise.",
        sevFreq: "Frequency: 1 session/day (10 repetitions, 10s rest).",
        sevBench: "Benchmark: 80% (Maintain for 3 consecutive days).",
        sevSide: "Side Activity: Total vocal rest and maintain warm water hydration.",

        // --- MODUL: TAHAP SEDERHANA (MODERATE) ---
        modTitle: "Training Level: MODERATE",
        modFocus: "Vocal cords are healing. Focus is on muscle stretching for smooth pitch transitions.",
        modPrac: "Siren Glide Exercise: Trill your lips like a boat engine ('Brrrrr'). Glide smoothly from a low pitch to high and back down. No Do-Re-Mi syllables yet.",
        modAI: "AI Precision: Extracts Fundamental Frequency (F0). Confusion matrix distinguishes between voice cracks and breath drops.",
        modFreq: "Frequency: 2 sessions/day (15 repetitions of glide).",
        modBench: "Benchmark: 85% (Maintain for 5 consecutive days).",
        modSide: "Side Activity: Steam inhalation and reduce face-to-face conversations.",

        // --- MODUL: TAHAP RINGAN (MILD) ---
        mildTitle: "Training Level: MILD",
        mildFocus: "Stamina building and full muscle control phase before clearance.",
        mildPrac: "Messa di Voce: Hold a mid-pitch on 'Oooooo', start soft, get loud, return soft. \nVocal Scale: Sing 'Do-Re-Mi-Fa-Sol' using 'Ma-Ma-Ma' syllables.",
        mildAI: "AI Precision: 2D volume vs time graph. Logistic regression classifies vocal onset to ensure soft easy onset and avoid hard glottal attacks.",
        mildFreq: "Frequency: 2 sessions/day (10 Messa di Voce reps, 5 Vocal Scale rounds).",
        mildBench: "Benchmark: 90% (Maintain for 7 consecutive days).",
        mildSide: "Side Activity: Cardio (jogging) for lung capacity and balanced diet for muscle repair.",

        // --- MODUL: NORMAL ---
        normTitle: "Level: NORMAL (Fully Recovered)",
        normDesc: "Congratulations! You have completed all voice rehabilitation sessions. Keep up your vocal hygiene."
    }
};
