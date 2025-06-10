// 診断開始
function startDiagnosis() {
    document.getElementById('diagnosisModal').style.display = 'block';
}

// 診断終了
function closeDiagnosis() {
    document.getElementById('diagnosisModal').style.display = 'none';
}

// 質問開始
function startQuestions() {
    const content = document.getElementById('diagnosisContent');
    content.innerHTML = `
        <div class="question-container">
            <h4>質問 1/5</h4>
            <p class="question-text">今一番気になる体の症状はどちらですか？</p>
            <div class="question-options">
                <button class="option-btn" onclick="selectOption('肩こり・首の痛み')">肩こり・首の痛み</button>
                <button class="option-btn" onclick="selectOption('腰痛・背中の痛み')">腰痛・背中の痛み</button>
                <button class="option-btn" onclick="selectOption('全身の疲労感')">全身の疲労感</button>
                <button class="option-btn" onclick="selectOption('姿勢の悪さ')">姿勢の悪さ</button>
                <button class="option-btn" onclick="selectOption('その他')">その他</button>
            </div>
        </div>
    `;
    updateProgress(20);
}

// オプション選択
function selectOption(option) {
    // 次の質問へ
    nextQuestion(option);
}

// 次の質問
function nextQuestion(previousAnswer) {
    const content = document.getElementById('diagnosisContent');
    content.innerHTML = `
        <div class="question-container">
            <h4>質問 2/5</h4>
            <p class="question-text">その症状はいつ頃から続いていますか？</p>
            <div class="question-options">
                <button class="option-btn" onclick="showQuestion3()">1週間未満</button>
                <button class="option-btn" onclick="showQuestion3()">1ヶ月くらい</button>
                <button class="option-btn" onclick="showQuestion3()">半年くらい</button>
                <button class="option-btn" onclick="showQuestion3()">1年以上</button>
            </div>
        </div>
    `;
    updateProgress(40);
}

// 質問3
function showQuestion3() {
    const content = document.getElementById('diagnosisContent');
    content.innerHTML = `
        <div class="question-container">
            <h4>質問 3/5</h4>
            <p class="question-text">デスクワークの時間はどのくらいですか？</p>
            <div class="question-options">
                <button class="option-btn" onclick="showQuestion4()">ほとんどしない</button>
                <button class="option-btn" onclick="showQuestion4()">2-4時間/日</button>
                <button class="option-btn" onclick="showQuestion4()">5-8時間/日</button>
                <button class="option-btn" onclick="showQuestion4()">8時間以上/日</button>
            </div>
        </div>
    `;
    updateProgress(60);
}

// 質問4
function showQuestion4() {
    const content = document.getElementById('diagnosisContent');
    content.innerHTML = `
        <div class="question-container">
            <h4>質問 4/5</h4>
            <p class="question-text">運動やストレッチはどのくらいしていますか？</p>
            <div class="question-options">
                <button class="option-btn" onclick="showQuestion5()">ほぼ毎日</button>
                <button class="option-btn" onclick="showQuestion5()">週2-3回</button>
                <button class="option-btn" onclick="showQuestion5()">たまに</button>
                <button class="option-btn" onclick="showQuestion5()">ほとんどしない</button>
            </div>
        </div>
    `;
    updateProgress(80);
}

// 質問5
function showQuestion5() {
    const content = document.getElementById('diagnosisContent');
    content.innerHTML = `
        <div class="question-container">
            <h4>質問 5/5</h4>
            <p class="question-text">過去にマッサージや整体を受けた経験はありますか？</p>
            <div class="question-options">
                <button class="option-btn" onclick="showResult()">よく利用している</button>
                <button class="option-btn" onclick="showResult()">たまに利用する</button>
                <button class="option-btn" onclick="showResult()">数回だけ利用</button>
                <button class="option-btn" onclick="showResult()">利用したことがない</button>
            </div>
        </div>
    `;
    updateProgress(100);
}

// 結果表示
function showResult() {
    const content = document.getElementById('diagnosisContent');
    content.innerHTML = `
        <div class="result-container">
            <div class="result-icon">🎯</div>
            <h4>診断結果</h4>
            <div class="result-type">
                <h5>あなたのタイプ：「デスクワーク疲労型」</h5>
            </div>
            
            <div class="recommendation">
                <h6>🏆 最適なケア方法</h6>
                <div class="care-option primary">
                    <div class="care-icon">🧘‍♀️</div>
                    <div class="care-info">
                        <h7>セルフストレッチ</h7>
                        <p>改善可能性: <span class="success">87%</span></p>
                        <p>同じタイプの方の多くが効果を実感しています</p>
                    </div>
                </div>
                
                <div class="care-option secondary">
                    <div class="care-icon">💆‍♂️</div>
                    <div class="care-info">
                        <h7>プロ施術</h7>
                        <p>改善可能性: <span class="info">45%</span></p>
                        <p>セルフケアで改善しない場合におすすめ</p>
                    </div>
                </div>
            </div>
            
            <div class="next-steps">
                <h6>🚀 今すぐできること</h6>
                <button class="cta-button primary" onclick="startSelfCare()">
                    <span class="cta-icon">▶️</span>
                    あなた専用3分ストレッチを見る
                </button>
                <p class="note">※効果が感じられない場合は、プロに無料相談できます</p>
            </div>
        </div>
    `;
}

// セルフケア開始
function startSelfCare() {
    const content = document.getElementById('diagnosisContent');
    content.innerHTML = `
        <div class="selfcare-container">
            <div class="selfcare-header">
                <h4>🎥 あなた専用ストレッチ動画</h4>
                <p>「デスクワーク疲労型」の方に最も効果的なストレッチです</p>
            </div>
            
            <div class="video-placeholder">
                <div class="video-thumbnail">
                    <div class="play-button">▶️</div>
                </div>
                <h5>肩甲骨はがし＆首ストレッチ</h5>
                <p>時間: 3分 | 場所: オフィスでもOK</p>
            </div>
            
            <div class="selfcare-benefits">
                <h6>このストレッチの効果</h6>
                <ul>
                    <li>✅ 肩こり・首の痛みを緩和</li>
                    <li>✅ デスクワーク姿勢をリセット</li>
                    <li>✅ 血行促進で疲労回復</li>
                    <li>✅ 集中力向上</li>
                </ul>
            </div>
            
            <div class="contact-info">
                <h6>📧 動画をメールで受け取る</h6>
                <div class="email-form">
                    <input type="email" placeholder="メールアドレス（任意）" id="emailInput">
                    <button class="cta-button primary" onclick="sendVideo()">動画を送信</button>
                </div>
                <p class="privacy-note">※メールアドレスは動画送信のみに使用し、営業メールは送りません</p>
            </div>
            
            <div class="support-info">
                <h6>🧘‍♀️ トレーナーとパーソナルストレッチも利用可能</h6>
                <p>1週間続けても改善しない場合は、プロトレーナーとパーソナルストレッチで更なる改善を</p>
                <button class="cta-button secondary" onclick="showSupport()">パーソナルストレッチについて</button>
            </div>
        </div>
    `;
}

// 動画送信
function sendVideo() {
    const email = document.getElementById('emailInput').value;
    if (email) {
        alert('動画リンクを送信しました！メールをご確認ください。');
    } else {
        alert('今すぐ動画を視聴できます！');
    }
}

// プロサポート表示
function showSupport() {
    const content = document.getElementById('diagnosisContent');
    content.innerHTML = `
        <div class="support-container">
            <div class="support-header">
                <h4>🧘‍♀️ パーソナルストレッチについて</h4>
                <p>プロトレーナーがあなたに最適なストレッチをマンツーマンで提供します</p>
            </div>
            
            <div class="support-options">
                <div class="support-card">
                    <div class="support-icon">📅</div>
                    <h6>オンライン予約</h6>
                    <p>24時間いつでも簡単予約</p>
                    <p class="support-price">予約手数料無料</p>
                </div>
                
                <div class="support-card">
                    <div class="support-icon">🧘‍♀️</div>
                    <h6>パーソナルストレッチ60分</h6>
                    <p>プロトレーナーがマンツーマンで施術</p>
                    <p class="support-price">いまなら3300円！</p>
                </div>
                
                <div class="support-card">
                    <div class="support-icon">🏢</div>
                    <h6>全国240店舗</h6>
                    <p>お近くの店舗で本格ストレッチ</p>
                    <p class="support-price">アクセス良好</p>
                </div>
            </div>
            
            <div class="support-promise">
                <h6>安心のお約束</h6>
                <ul>
                    <li>✅ 無理な勧誘は一切なし</li>
                    <li>✅ 相談のみでも大歓迎</li>
                    <li>✅ いつでも中断・停止OK</li>
                    <li>✅ あなたのペースで進行</li>
                </ul>
            </div>
            
            <button class="cta-button primary" onclick="contactPro()">
                <span class="cta-icon">📅</span>
                パーソナルストレッチを予約する
            </button>
            
            <button class="cta-button secondary" onclick="closeDiagnosis()">
                セルフケアから始める
            </button>
        </div>
    `;
}

// プロ相談予約
function contactPro() {
    alert('ありがとうございます！相談予約フォームへ移動します。');
    closeDiagnosis();
}

// プログレスバー更新
function updateProgress(percentage) {
    document.getElementById('progress').style.width = percentage + '%';
}

// FAQ切り替え
function toggleFaq(element) {
    const faqItem = element.parentElement;
    const isActive = faqItem.classList.contains('active');
    
    // 全てのFAQを閉じる
    document.querySelectorAll('.faq-item').forEach(item => {
        item.classList.remove('active');
    });
    
    // クリックされたFAQを開く（閉じる場合は除く）
    if (!isActive) {
        faqItem.classList.add('active');
    }
}

// モーダル外クリックで閉じる
window.onclick = function(event) {
    const modal = document.getElementById('diagnosisModal');
    if (event.target == modal) {
        closeDiagnosis();
    }
}

// スムーススクロール
document.addEventListener('DOMContentLoaded', function() {
    // アンカーリンクのスムーススクロール
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

// 追加のCSS（動的スタイル）
const additionalStyles = `
.question-container {
    text-align: center;
    padding: 1rem 0;
}

.question-text {
    font-size: 1.1rem;
    margin-bottom: 2rem;
    color: #2c3e50;
}

.question-options {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.option-btn {
    padding: 1rem 1.5rem;
    border: 2px solid #e9ecef;
    border-radius: 10px;
    background: white;
    color: #2c3e50;
    font-size: 1rem;
    cursor: pointer;
    transition: all 0.3s ease;
    font-family: inherit;
}

.option-btn:hover {
    border-color: #667eea;
    background: #f8f9ff;
    transform: translateY(-2px);
}

.result-container {
    text-align: center;
    padding: 1rem 0;
}

.result-icon {
    font-size: 4rem;
    margin-bottom: 1rem;
}

.result-type {
    background: linear-gradient(45deg, #667eea, #764ba2);
    color: white;
    padding: 1rem;
    border-radius: 10px;
    margin: 1.5rem 0;
}

.recommendation {
    margin: 2rem 0;
    text-align: left;
}

.care-option {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 1rem;
    border-radius: 10px;
    margin: 1rem 0;
}

.care-option.primary {
    background: #e8f5e8;
    border: 2px solid #28a745;
}

.care-option.secondary {
    background: #f8f9fa;
    border: 2px solid #6c757d;
}

.care-icon {
    font-size: 2rem;
}

.care-info h7 {
    font-weight: 600;
    font-size: 1.1rem;
    display: block;
    margin-bottom: 0.5rem;
}

.success {
    color: #28a745;
    font-weight: 600;
}

.info {
    color: #17a2b8;
    font-weight: 600;
}

.next-steps {
    margin-top: 2rem;
    padding-top: 2rem;
    border-top: 2px solid #e9ecef;
}

.note {
    font-size: 0.9rem;
    color: #6c757d;
    margin-top: 1rem;
}

.selfcare-container, .support-container {
    text-align: center;
    padding: 1rem 0;
}

.video-placeholder {
    background: #f8f9fa;
    padding: 2rem;
    border-radius: 10px;
    margin: 1.5rem 0;
}

.video-thumbnail {
    width: 200px;
    height: 120px;
    background: #000;
    border-radius: 10px;
    margin: 0 auto 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
}

.play-button {
    color: white;
    font-size: 2rem;
}

.selfcare-benefits {
    text-align: left;
    background: #f8f9fa;
    padding: 1.5rem;
    border-radius: 10px;
    margin: 1.5rem 0;
}

.selfcare-benefits ul {
    list-style: none;
    padding: 0;
}

.selfcare-benefits li {
    margin: 0.5rem 0;
}

.email-form {
    display: flex;
    gap: 1rem;
    margin: 1rem 0;
    flex-wrap: wrap;
}

.email-form input {
    flex: 1;
    padding: 0.75rem;
    border: 2px solid #e9ecef;
    border-radius: 5px;
    font-size: 1rem;
    min-width: 200px;
}

.privacy-note {
    font-size: 0.8rem;
    color: #6c757d;
    margin-top: 0.5rem;
}

.support-options {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1rem;
    margin: 2rem 0;
}

.support-card {
    background: #f8f9fa;
    padding: 1.5rem;
    border-radius: 10px;
    border: 2px solid #e9ecef;
}

.support-card .support-icon {
    font-size: 2rem;
    margin-bottom: 1rem;
}

.support-price {
    font-weight: 600;
    color: #28a745;
    margin-top: 0.5rem;
}

.support-promise {
    background: #e8f5e8;
    padding: 1.5rem;
    border-radius: 10px;
    margin: 2rem 0;
    text-align: left;
}

.support-promise ul {
    list-style: none;
    padding: 0;
}

.support-promise li {
    margin: 0.5rem 0;
}

.cta-button.secondary {
    background: #6c757d;
    color: white;
    margin-top: 1rem;
}

.cta-button.secondary:hover {
    background: #5a6268;
    transform: translateY(-2px);
}

@media (max-width: 768px) {
    .email-form {
        flex-direction: column;
    }
    
    .email-form input {
        min-width: auto;
    }
    
    .support-options {
        grid-template-columns: 1fr;
    }
}
`;

// 追加スタイルをhead内に挿入
const styleSheet = document.createElement('style');
styleSheet.textContent = additionalStyles;
document.head.appendChild(styleSheet);