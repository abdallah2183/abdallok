let currentSurah = '';
let translationVisible = false;
let favorites = [];

// معلومات السور
const surahInfo = {
    'الفاتحة': 'عدد الآيات: 7، مكان النزول: مكية',
    'البقرة': 'عدد الآيات: 286، مكان النزول: مدنية',
    'ال عمران': 'عدد الآيات: 200، مكان النزول: مدنية',
    'النساء': 'عدد الآيات: 176، مكان النزول: مدنية',
    'المائدة': 'عدد الآيات: 120، مكان النزول: مدنية',
};

// دالة لعرض السورة
function showSurah(surah) {
    const surahTitle = document.getElementById('surah-title');
    const surahText = document.getElementById('surah-text');
    const surahInfoElement = document.getElementById('surah-info');
    const backButton = document.getElementById('back-button');
    const translateButton = document.getElementById('translate-button');
    const shareButton = document.getElementById('share-button');
    const translation = document.getElementById('translation');
    const audioPlayer = document.getElementById('audio-player');
    const surahContent = document.getElementById('surah-content');
    const reciterInfo = document.getElementById('reciter-info');

    currentSurah = surah; // حفظ السورة الحالية

    // عرض معلومات السورة
    surahInfoElement.innerText = surahInfo[surah] || '';

    // تعيين النص والصوت بناءً على السورة المحددة
    if (surah === 'الفاتحة') {
        surahTitle.innerText = 'سورة الفاتحة';
        surahText.innerHTML = `
            بِسْمِ اللَّهِ الرَّحْمَـٰنِ الرَّحِيمِ<br>
            الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ<br>
            الرَّحْمَـٰنِ الرَّحِيمِ<br>
            مَالِكِ يَوْمِ الدِّينِ<br>
            إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ<br>
            اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ<br>
            صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ<br>
            غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّالِّينَ
        `;
        audioPlayer.src = 'https://cdn.discordapp.com/attachments/1299415990861303829/1313527351279353886/voice-message.ogg?ex=6750752c&is=674f23ac&hm=c5c260f47cc5be9057a822201e414c87e1ff1010592793f6de27560617f4c74f'; // رابط تلاوة سورة الفاتحة
    } else if (surah === 'البقرة') {
        surahTitle.innerText = 'سورة البقرة';
        surahText.innerHTML = `
            (نص سورة البقرة هنا)`;
        audioPlayer.src = 'https://example.com/path/to/al-baqarah.mp3'; // رابط تلاوة سورة البقرة
    } else if (surah === 'ال عمران') {
        surahTitle.innerText = 'سورة آل عمران';
        surahText.innerHTML = `
            (نص سورة آل عمران هنا)`;
        audioPlayer.src = 'https://example.com/path/to/al-imran.mp3'; // رابط تلاوة سورة آل عمران
    } else if (surah === 'النساء') {
        surahTitle.innerText = 'سورة النساء';
        surahText.innerHTML = `
            (نص سورة النساء هنا)`;
        audioPlayer.src = 'https://example.com/path/to/an-nisa.mp3'; // رابط تلاوة سورة النساء
    } else if (surah === 'المائدة') {
        surahTitle.innerText = 'سورة المائدة';
        surahText.innerHTML = `
            (نص سورة المائدة هنا)`;
        audioPlayer.src = 'https://example.com/path/to/al-maidah.mp3'; // رابط تلاوة سورة المائدة
    }

    // إظهار المحتوى مع تأثير الحركة
    surahContent.classList.add('show');
    backButton.style.display = 'block';
    translateButton.style.display = 'block';
    shareButton.style.display = 'block';
    audioPlayer.style.display = 'block'; // إظهار مشغل الصوت
    audioPlayer.play(); // تشغيل التلاوة
    translation.style.display = 'none'; // إخفاء الترجمة
}

// دالة لتصفية السور
function filterSurahs() {
    const input = document.getElementById('search-input').value.toLowerCase();
    const surahList = document.getElementById('surah-list');
    const surahs = surahList.getElementsByTagName('li');

    for (let i = 0; i < surahs.length; i++) {
        const surah = surahs[i];
        if (surah.textContent.toLowerCase().includes(input)) {
            surah.style.display = '';
        } else {
            surah.style.display = 'none';
        }
    }
}

// دالة لإظهار قائمة السور
function showList() {
    const surahContent = document.getElementById('surah-content');
    surahContent.classList.remove('show');
    document.getElementById('back-button').style.display = 'none';
    document.getElementById('translate-button').style.display = 'none';
    document.getElementById('share-button').style.display = 'none';
}

// دالة لتبديل الترجمة
function toggleTranslation() {
    const translation = document.getElementById('translation');
    translationVisible = !translationVisible;

    if (translationVisible) {
        translation.innerHTML = "ترجمة الآيات هنا"; // أضف الترجمة المناسبة هنا
        translation.style.display = 'block';
    } else {
        translation.style.display = 'none';
    }
}

// دالة لمشاركة السورة
function shareSurah() {
    const surahTitle = document.getElementById('surah-title').innerText;
    const shareText = `أستمع إلى ${surahTitle} في تطبيق القرآن الكريم!`;
    navigator.clipboard.writeText(shareText).then(() => {
        alert('تم نسخ النص إلى الحافظة!');
    });
}

// دالة لتغيير الثيم
function toggleTheme() {
    document.body.classList.toggle('dark');
}