// 診断開始
function startDiagnosis() {
    document.getElementById('diagnosisModal').style.display = 'block';
}

// 診断終了
function closeDiagnosis() {
    document.getElementById('diagnosisModal').style.display = 'none';
}

// ユーザータイプ判定用のグローバル変数
let userType = '';

// 質問開始 - まずはユーザータイプを判定
function startQuestions() {
    const content = document.getElementById('diagnosisContent');
    content.innerHTML = `
        <div class="question-container">
            <h4>質問 1/6</h4>
            <p class="question-text">パーソナルストレッチの経験について教えてください</p>
            <div class="question-options">
                <button class="option-btn" onclick="setUserType('first-time')">初めて・まだ体験したことがない</button>
                <button class="option-btn" onclick="setUserType('experienced')">一度体験したことがある</button>
                <button class="option-btn" onclick="setUserType('regular')">定期的に通っている</button>
            </div>
        </div>
    `;
    updateProgress(16);
}

// ユーザータイプ設定と次の質問へ
function setUserType(type) {
    userType = type;
    showSymptomQuestion();
}

// 症状に関する質問
function showSymptomQuestion() {
    const content = document.getElementById('diagnosisContent');
    content.innerHTML = `
        <div class="question-container">
            <h4>質問 2/6</h4>
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
    updateProgress(32);
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
            <h4>質問 3/6</h4>
            <p class="question-text">その症状はいつ頃から続いていますか？</p>
            <div class="question-options">
                <button class="option-btn" onclick="showQuestion3()">1週間未満</button>
                <button class="option-btn" onclick="showQuestion3()">1ヶ月くらい</button>
                <button class="option-btn" onclick="showQuestion3()">半年くらい</button>
                <button class="option-btn" onclick="showQuestion3()">1年以上</button>
            </div>
        </div>
    `;
    updateProgress(48);
}

// 質問3
function showQuestion3() {
    const content = document.getElementById('diagnosisContent');
    content.innerHTML = `
        <div class="question-container">
            <h4>質問 4/6</h4>
            <p class="question-text">デスクワークの時間はどのくらいですか？</p>
            <div class="question-options">
                <button class="option-btn" onclick="showQuestion4()">ほとんどしない</button>
                <button class="option-btn" onclick="showQuestion4()">2-4時間/日</button>
                <button class="option-btn" onclick="showQuestion4()">5-8時間/日</button>
                <button class="option-btn" onclick="showQuestion4()">8時間以上/日</button>
            </div>
        </div>
    `;
    updateProgress(64);
}

// 質問4
function showQuestion4() {
    const content = document.getElementById('diagnosisContent');
    content.innerHTML = `
        <div class="question-container">
            <h4>質問 5/6</h4>
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
            <h4>質問 6/6</h4>
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

// 結果表示 - ユーザータイプ別に分岐
function showResult() {
    const content = document.getElementById('diagnosisContent');
    
    if (userType === 'first-time') {
        showFirstTimeResult();
    } else if (userType === 'experienced') {
        showExperiencedResult();
    } else {
        showRegularResult();
    }
}

// 初回ユーザー向け結果
function showFirstTimeResult() {
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
                        <h7>まずはセルフストレッチから</h7>
                        <p>改善可能性: <span class="success">87%</span></p>
                        <p>同じタイプの方の多くが効果を実感しています</p>
                    </div>
                </div>
                
                <div class="care-option secondary">
                    <div class="care-icon">💆‍♂️</div>
                    <div class="care-info">
                        <h7>パーソナルストレッチ体験</h7>
                        <p>改善可能性: <span class="info">95%</span></p>
                        <p>本格的に改善したい場合におすすめ</p>
                    </div>
                </div>
            </div>
            
            <div class="next-steps">
                <h6>🚀 今すぐできること</h6>
                <button class="cta-button primary" onclick="startSelfCare()">
                    <span class="cta-icon">▶️</span>
                    あなた専用3分ストレッチを見る
                </button>
                <p class="note">※効果が感じられない場合は、パーソナルストレッチ体験がおすすめです</p>
            </div>
        </div>
    `;
}

// 体験済みユーザー向け結果
function showExperiencedResult() {
    const content = document.getElementById('diagnosisContent');
    content.innerHTML = `
        <div class="result-container experienced-user">
            <div class="result-icon">🎯</div>
            <h4>診断結果</h4>
            <div class="result-type experienced">
                <h5>パーソナルストレッチ体験済みの「デスクワーク疲労型」</h5>
                <p class="experience-note">前回の施術効果を最大化しましょう！</p>
            </div>
            
            <div class="cycle-recommendation">
                <h6>🔄 理想的な継続サイクル</h6>
                <div class="cycle-visual">
                    <div class="cycle-step completed">パーソナルストレッチ体験</div>
                    <div class="cycle-arrow">→</div>
                    <div class="cycle-step current">自宅でセルフケア継続</div>
                    <div class="cycle-arrow">→</div>
                    <div class="cycle-step">効果実感・維持</div>
                    <div class="cycle-arrow">→</div>
                    <div class="cycle-step">次回来店で更なる向上</div>
                </div>
            </div>
            
            <div class="recommendation">
                <h6>🏆 今のあなたに最適なアプローチ</h6>
                <div class="care-option primary">
                    <div class="care-icon">🏠</div>
                    <div class="care-info">
                        <h7>効果を持続させるセルフケア</h7>
                        <p>継続効果: <span class="success">93%</span></p>
                        <p>パーソナルストレッチの効果を自宅で維持・向上</p>
                    </div>
                </div>
                
                <div class="care-option secondary">
                    <div class="care-icon">📅</div>
                    <div class="care-info">
                        <h7>月1回のメンテナンス来店</h7>
                        <p>満足度: <span class="info">96%</span></p>
                        <p>多くの方がこのサイクルで最大効果を実感</p>
                    </div>
                </div>
            </div>
            
            <div class="next-steps">
                <h6>🚀 今すぐできること</h6>
                <button class="cta-button primary" onclick="startSelfCareForExperienced()">
                    <span class="cta-icon">⚡</span>
                    効果を持続させるセルフケアを見る
                </button>
                <p class="note">※月1回の来店で、更なる改善を目指しませんか？</p>
            </div>
        </div>
    `;
}

// 定期利用者向け結果
function showRegularResult() {
    const content = document.getElementById('diagnosisContent');
    content.innerHTML = `
        <div class="result-container regular-user">
            <div class="result-icon">⭐</div>
            <h4>診断結果</h4>
            <div class="result-type regular">
                <h5>継続利用中の「デスクワーク疲労型」</h5>
                <p class="experience-note">素晴らしい！継続されていますね</p>
            </div>
            
            <div class="recommendation">
                <h6>🏆 更なる効果向上のために</h6>
                <div class="care-option primary">
                    <div class="care-icon">📈</div>
                    <div class="care-info">
                        <h7>来店間隔の最適化</h7>
                        <p>効果向上: <span class="success">98%</span></p>
                        <p>自宅ケアと組み合わせて効果を最大化</p>
                    </div>
                </div>
            </div>
            
            <div class="next-steps">
                <h6>🚀 更なる向上のために</h6>
                <button class="cta-button primary" onclick="startAdvancedSelfCare()">
                    <span class="cta-icon">🎯</span>
                    上級者向けセルフケアを見る
                </button>
            </div>
        </div>
    `;
}

// 体験済みユーザー向けセルフケア
function startSelfCareForExperienced() {
    const content = document.getElementById('diagnosisContent');
    content.innerHTML = `
        <div class="selfcare-container experienced">
            <div class="selfcare-header">
                <h4>⚡ 効果を持続させる専用ストレッチ</h4>
                <p>パーソナルストレッチの効果を最大化し、次回来店まで効果を維持しましょう</p>
            </div>
            
            <div class="video-placeholder">
                <div class="video-thumbnail">
                    <div class="play-button">▶️</div>
                </div>
                <h5>効果持続！肩甲骨＆体幹ストレッチ</h5>
                <p>時間: 5分 | 場所: 自宅・オフィス | レベル: 中級</p>
            </div>
            
            <div class="cycle-benefits">
                <h6>継続サイクルの効果</h6>
                <div class="benefit-grid">
                    <div class="benefit-item">
                        <span class="benefit-icon">🎯</span>
                        <span>効果の持続</span>
                    </div>
                    <div class="benefit-item">
                        <span class="benefit-icon">📈</span>
                        <span>更なる改善</span>
                    </div>
                    <div class="benefit-item">
                        <span class="benefit-icon">💰</span>
                        <span>コスパ最大化</span>
                    </div>
                    <div class="benefit-item">
                        <span class="benefit-icon">🏆</span>
                        <span>理想の体づくり</span>
                    </div>
                </div>
            </div>
            
            <div class="next-visit-timing">
                <h6>📅 次回来店の最適タイミング</h6>
                <p>多くの方が<strong>月1回（3-4週間後）</strong>の来店で最大効果を実感されています</p>
                <button class="cta-button secondary" onclick="showNextVisitSchedule()">最適な来店スケジュールを見る</button>
            </div>
            
            <div class="contact-info">
                <h6>📧 継続サポート動画をお送りします</h6>
                <div class="email-form">
                    <input type="email" placeholder="メールアドレス（任意）" id="emailInputExperienced">
                    <button class="cta-button primary" onclick="sendExperiencedVideo()">継続プログラムを受け取る</button>
                </div>
            </div>
        </div>
    `;
}

// 上級者向けセルフケア
function startAdvancedSelfCare() {
    const content = document.getElementById('diagnosisContent');
    content.innerHTML = `
        <div class="selfcare-container advanced">
            <div class="selfcare-header">
                <h4>🎯 上級者向け強化プログラム</h4>
                <p>継続利用中のあなたに、更なるレベルアップを目指すプログラムをご提案</p>
            </div>
            
            <div class="advanced-program">
                <h6>🔥 強化プログラム内容</h6>
                <div class="program-items">
                    <div class="program-item">
                        <span class="program-icon">⚡</span>
                        <div class="program-content">
                            <h7>高強度ストレッチ</h7>
                            <p>より深層筋にアプローチ</p>
                        </div>
                    </div>
                    <div class="program-item">
                        <span class="program-icon">🎯</span>
                        <div class="program-content">
                            <h7>部位別集中ケア</h7>
                            <p>気になる箇所の重点改善</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// セルフケア開始（初回ユーザー向け）
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

// 体験済みユーザー向け動画送信
function sendExperiencedVideo() {
    const email = document.getElementById('emailInputExperienced').value;
    if (email) {
        alert('継続プログラム動画を送信しました！定期的にサポート情報をお送りします。');
    } else {
        alert('継続プログラム動画を今すぐ視聴できます！');
    }
}

// 次回来店スケジュール表示
function showNextVisitSchedule() {
    const content = document.getElementById('diagnosisContent');
    content.innerHTML = `
        <div class="schedule-container">
            <div class="schedule-header">
                <h4>📅 あなたに最適な来店スケジュール</h4>
                <p>継続効果を最大化する来店タイミングをご提案します</p>
            </div>
            
            <div class="schedule-options">
                <div class="schedule-option recommended">
                    <div class="schedule-icon">⭐</div>
                    <h6>おすすめ：月1回プラン</h6>
                    <p>3-4週間に1回の来店</p>
                    <ul>
                        <li>✅ 効果の持続性が最高</li>
                        <li>✅ コストパフォーマンス良好</li>
                        <li>✅ 95%の方が満足</li>
                    </ul>
                    <p class="price">月額3,300円（初回価格適用時）</p>
                </div>
                
                <div class="schedule-option">
                    <div class="schedule-icon">🔥</div>
                    <h6>集中プラン</h6>
                    <p>2週間に1回の来店</p>
                    <ul>
                        <li>✅ 早期効果実感</li>
                        <li>✅ 深刻な症状におすすめ</li>
                    </ul>
                </div>
            </div>
            
            <button class="cta-button primary" onclick="bookNextVisit()">
                <span class="cta-icon">📅</span>
                次回来店を予約する
            </button>
            
            <button class="cta-button secondary" onclick="startSelfCareForExperienced()">
                セルフケアから始める
            </button>
        </div>
    `;
}

// 次回来店予約
function bookNextVisit() {
    alert('予約ページへ移動します。最適なタイミングでご来店ください！');
    closeDiagnosis();
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
/* ユーザータイプ別スタイル */
.result-type.experienced {
    background: linear-gradient(45deg, #28a745, #20c997);
    color: white;
    padding: 1rem;
    border-radius: 10px;
    margin: 1.5rem 0;
}

.result-type.regular {
    background: linear-gradient(45deg, #ffd700, #ffb347);
    color: #333;
    padding: 1rem;
    border-radius: 10px;
    margin: 1.5rem 0;
}

.experience-note {
    font-size: 0.9rem;
    margin-top: 0.5rem;
    opacity: 0.9;
}

/* 継続サイクル表示 */
.cycle-recommendation {
    margin: 2rem 0;
    background: #f8f9fa;
    padding: 1.5rem;
    border-radius: 10px;
    border-left: 4px solid #28a745;
}

.cycle-visual {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-top: 1rem;
    flex-wrap: wrap;
    justify-content: center;
}

.cycle-step {
    background: #e9ecef;
    padding: 0.5rem 1rem;
    border-radius: 20px;
    font-size: 0.8rem;
    text-align: center;
    min-width: 80px;
}

.cycle-step.completed {
    background: #28a745;
    color: white;
}

.cycle-step.current {
    background: #ffc107;
    color: #333;
    font-weight: 600;
}

.cycle-arrow {
    color: #28a745;
    font-weight: bold;
}

/* 体験済みユーザー向けセルフケア */
.selfcare-container.experienced .selfcare-header {
    background: linear-gradient(45deg, #28a745, #20c997);
    color: white;
    padding: 1.5rem;
    border-radius: 10px;
    margin-bottom: 2rem;
}

.cycle-benefits {
    background: #e8f5e8;
    padding: 1.5rem;
    border-radius: 10px;
    margin: 2rem 0;
}

.benefit-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
    margin-top: 1rem;
}

.benefit-item {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-weight: 500;
}

.benefit-icon {
    font-size: 1.2rem;
}

.next-visit-timing {
    background: #fff3cd;
    border: 1px solid #ffeaa7;
    padding: 1.5rem;
    border-radius: 10px;
    margin: 2rem 0;
    text-align: center;
}

.next-visit-timing strong {
    color: #d63384;
}

/* スケジュール表示 */
.schedule-container {
    text-align: center;
    padding: 1rem 0;
}

.schedule-options {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1rem;
    margin: 2rem 0;
}

.schedule-option {
    background: #f8f9fa;
    padding: 1.5rem;
    border-radius: 10px;
    border: 2px solid #e9ecef;
    text-align: left;
}

.schedule-option.recommended {
    border-color: #28a745;
    background: #e8f5e8;
    position: relative;
}

.schedule-option.recommended::before {
    content: 'おすすめ';
    position: absolute;
    top: -10px;
    left: 10px;
    background: #28a745;
    color: white;
    padding: 0.25rem 0.75rem;
    border-radius: 15px;
    font-size: 0.7rem;
    font-weight: 600;
}

.schedule-icon {
    font-size: 2rem;
    margin-bottom: 1rem;
}

.schedule-option h6 {
    color: #2c3e50;
    margin-bottom: 0.5rem;
}

.schedule-option ul {
    list-style: none;
    padding: 0;
    margin: 1rem 0;
}

.schedule-option li {
    margin: 0.25rem 0;
    font-size: 0.9rem;
}

.price {
    font-weight: 600;
    color: #d63384;
    font-size: 1.1rem;
    margin-top: 1rem;
}

/* 上級者向けプログラム */
.selfcare-container.advanced .selfcare-header {
    background: linear-gradient(45deg, #ffd700, #ffb347);
    color: #333;
    padding: 1.5rem;
    border-radius: 10px;
    margin-bottom: 2rem;
}

.advanced-program {
    background: #fff3cd;
    padding: 1.5rem;
    border-radius: 10px;
    margin: 2rem 0;
}

.program-items {
    display: grid;
    gap: 1rem;
    margin-top: 1rem;
}

.program-item {
    display: flex;
    align-items: center;
    gap: 1rem;
    background: white;
    padding: 1rem;
    border-radius: 8px;
}

.program-icon {
    font-size: 1.5rem;
}

.program-content h7 {
    font-weight: 600;
    display: block;
    margin-bottom: 0.25rem;
}

@media (max-width: 768px) {
    .cycle-visual {
        flex-direction: column;
        gap: 1rem;
    }
    
    .cycle-arrow {
        transform: rotate(90deg);
    }
    
    .benefit-grid {
        grid-template-columns: 1fr;
    }
    
    .schedule-options {
        grid-template-columns: 1fr;
    }
}
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