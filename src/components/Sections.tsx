

// 共通のアースカラー設定
const colors = {
  primary: '#2c3e50',    // 深みのあるグレー
  accent: '#a3b18a',     // セージグリーン
  highlight: '#bc6c25',  // テラコッタ
  border: '#dcd7c9',     // サンドベージュ
  text: '#444'
};

// ①自己プロデュース・経緯
export const Vision = () => (
  <section style={{ textAlign: 'left' }}>
    <h2 style={{ color: colors.primary, borderBottom: `2px solid ${colors.accent}`, display: 'inline-block', marginBottom: '30px' }}>
      自己プロデュース：遊びと脳とデジタルの融合
    </h2>
    
    <p style={{ marginBottom: '20px', lineHeight: '1.8', fontSize: '1rem' }}>
      はじめまして、丹生谷です！僕は作業療法士（OT）として「脳の仕組み」を学び、教員として「学びの楽しさ」を追求してきました。<br />
      僕の強みは、<b>脳科学的な知見をベースに、ITを『魔法の道具』として使い、学習者のやる気にスイッチを入れること</b>です。堅苦しい教育ではなく、つい夢中になってしまう『遊び』のような学習体験をデザインしています。
    </p>

    <div style={{ position: 'relative', borderLeft: `2px solid ${colors.accent}`, marginLeft: '20px', paddingLeft: '30px' }}>
      
      {/* 2014-2022 */}
      <div style={{ marginBottom: '30px', position: 'relative' }}>
        <div style={{ position: 'absolute', left: '-41px', top: '0', background: colors.primary, width: '20px', height: '20px', borderRadius: '50%', border: '4px solid #fff' }}></div>
        <span style={{ fontWeight: 'bold', color: colors.primary, fontSize: '1.1rem' }}>臨床家として：脳と心の仕組みを知る</span>
        <p style={{ fontSize: '0.95rem', color: colors.text, marginTop: '8px', lineHeight: '1.6' }}>
          病院や療育現場で、高次脳機能障害や発達障害を持つ方々と向き合ってきました。「どうすれば脳は情報をスムーズに処理できるのか？」という視点は、今のUI/UXデザインの基礎になっています。
        </p>
      </div>

      {/* 2022-現在 */}
      <div style={{ marginBottom: '30px', position: 'relative' }}>
        <div style={{ position: 'absolute', left: '-41px', top: '0', background: colors.highlight, width: '20px', height: '20px', borderRadius: '50%', border: '4px solid #fff' }}></div>
        <span style={{ fontWeight: 'bold', color: colors.primary, fontSize: '1.1rem' }}>教育家として：デジタルを「医術」に変える</span>
        <p style={{ fontSize: '0.95rem', color: colors.text, marginTop: '8px', lineHeight: '1.6' }}>
          教壇に立ち、学生の不安を「シミュレーター」や「ゲーム」で解消してきました。
          ただのIT導入ではなく、脳機能に沿ったアプローチで<b>2年連続合格率100%</b>を達成。デジタルを教育という名の『治療的介入（デジタル医術）』として活用しています。
        </p>
      </div>

      {/* 現在-未来 */}
      <div style={{ marginBottom: '30px', position: 'relative' }}>
        <div style={{ position: 'absolute', left: '-41px', top: '0', background: '#b21f1f', width: '20px', height: '20px', borderRadius: '50%', border: '4px solid #fff' }}></div>
        <span style={{ fontWeight: 'bold', color: colors.primary, fontSize: '1.1rem' }}>エンジニアとして：ワクワクする未来を実装する</span>
        <p style={{ fontSize: '0.95rem', color: colors.text, marginTop: '8px', lineHeight: '1.6' }}>
          現在は放送大学で教育心理学を深めながら、「SakuPass」などのプロダクトを爆速で開発中。
          「難しい」を「楽しい」へ。脳機能のプロにしか作れない、血の通ったシステムを世に送り出します。
        </p>
      </div>
    </div>

    <div style={{ background: '#fff', padding: '25px', borderRadius: '12px', marginTop: '20px', borderLeft: `4px solid ${colors.highlight}`, boxShadow: '0 4px 6px rgba(0,0,0,0.02)' }}>
      <strong>丹生谷だからできること</strong>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '15px', marginTop: '15px' }}>
        <div style={{ fontSize: '0.9rem', lineHeight: '1.5' }}>
          <span style={{ color: colors.highlight, fontWeight: 'bold' }}>● 脳機能への最適化</span><br />
          認知負荷を抑え、記憶に残りやすい情報設計が可能です。
        </div>
        <div style={{ fontSize: '0.9rem', lineHeight: '1.5' }}>
          <span style={{ color: colors.highlight, fontWeight: 'bold' }}>● 教育的ゲーミフィケーション</span><br />
          「やらされる学習」を「やりたくなる遊び」へ変換します。
        </div>
        <div style={{ fontSize: '0.9rem', lineHeight: '1.5' }}>
          <span style={{ color: colors.highlight, fontWeight: 'bold' }}>● 現場発の実装スピード</span><br />
          臨床のスピード感で、今すぐ必要なツールを自ら形にします。
        </div>
      </div>
    </div>
  </section>
);

// ②実績（学会・メディア）
export const Achievements = () => (
  <section style={{ textAlign: 'left' }}>
    <h2 style={{ color: colors.primary, borderBottom: `2px solid ${colors.accent}`, display: 'inline-block', marginBottom: '30px' }}>
      実績：専門知見 × デジタル発信
    </h2>

    <div style={{ display: 'grid', gap: '20px' }}>
      {/* 実績1：発達障害×情報発信 */}
      <div style={{ background: '#fff', padding: '25px', borderRadius: '12px', borderLeft: `5px solid ${colors.primary}`, boxShadow: '0 4px 6px rgba(0,0,0,0.02)' }}>
        <span style={{ background: colors.primary, color: '#fff', padding: '4px 12px', borderRadius: '4px', fontSize: '0.75rem', fontWeight: 'bold' }}>発達障害領域 × 情報発信</span>
        <h3 style={{ margin: '10px 0', fontSize: '1.2rem', color: colors.primary }}>SNS・勉強会による「知のオープン化」</h3>
        <p style={{ fontSize: '0.95rem', color: colors.text, lineHeight: '1.6' }}>
          放課後等デイサービスでの臨床経験をベースに、SNSで発達障害に関する専門知識を分かりやすく発信。
          また、専門職や保護者を対象とした勉強会を個人で定期開催し、複雑な療育理論を「誰もが実践できる形」に変換して提供。
          <b>「届ける技術」と「ドメイン知識」の融合</b>を体現しています。
        </p>
      </div>

      {/* 実績2：学会発表×研究 */}
      <div style={{ background: '#fff', padding: '25px', borderRadius: '12px', borderLeft: `5px solid ${colors.accent}`, boxShadow: '0 4px 6px rgba(0,0,0,0.02)' }}>
        <span style={{ background: colors.accent, color: '#fff', padding: '4px 12px', borderRadius: '4px', fontSize: '0.75rem', fontWeight: 'bold' }}>学会発表 × 教育DX研究</span>
        <h3 style={{ margin: '10px 0', fontSize: '1.2rem', color: colors.primary }}>臨床実習シミュレーターの構築と効果検証</h3>
        <p style={{ fontSize: '0.95rem', color: colors.text, lineHeight: '1.6' }}>
          学生の実習不安を「ITで解決する」ことをテーマに、Webベースの臨床実習シミュレーターを自作。
          単なる開発に留まらず、研究としてデータ収集・分析を行い、<b>全国学会にて「不安軽減と自己効力感の向上」という有意な結果を発表</b>しました。
        </p>
      </div>

      {/* 実績3：メディア・教育成果 */}
      <div style={{ background: '#fff', padding: '25px', borderRadius: '12px', borderLeft: '5px solid #b21f1f', boxShadow: '0 4px 6px rgba(0,0,0,0.02)' }}>
        <span style={{ background: '#b21f1f', color: '#fff', padding: '4px 12px', borderRadius: '4px', fontSize: '0.75rem', fontWeight: 'bold' }}>メディア・教育成果</span>
        <h3 style={{ margin: '10px 0', fontSize: '1.2rem', color: colors.primary }}>テレビ特集依頼・合格率100%の達成</h3>
        <p style={{ fontSize: '0.95rem', color: colors.text, lineHeight: '1.6' }}>
          生成AIや独自アプリを駆使した指導が評価され、地方地上波テレビ番組にて特集依頼あり。
          教育DXを徹底した結果、<b>2年連続国家試験合格率100%・1年次退学率0%</b>という、現場目線の確かな成果を導き出しました。
        </p>
      </div>
    </div>
  </section>
);

// ③開発実績
export const Projects = () => {
  const apps = [
    {
      title: "SakuPass（サクパス）",
      url: "https://sakupass.com/info.html",
      tags: ["JavaScript", "Firebase", "Stripe連携"],
      description: "「合格を、もっと身近に。」をコンセプトとした、医療系国家試験対策のサブスクリプション型学習プラットフォーム。Firestoreを活用したリアルタイムな学習進捗管理に加え、Stripe APIによる決済システムを自律的に実装。現場のニーズを形にした本格的なWebサービスです。"
    },
    {
      title: "オンライン・オープンキャンパス",
      url: "https://hungryot711-bot.github.io/opencampus/",
      tags: ["UI/UXデザイン", "広報ツール"],
      description: "時間と場所の制約を超えて、学校の魅力を体験できるデジタル広報ツール。受験生の「知りたい」に直感的に応えるインターフェースを構築しています。"
    },
    {
      title: "河原クエスト",
      url: "https://hungryot711-bot.github.io/kawaharaquest/",
      tags: ["ゲーミフィケーション", "JavaScript"],
      description: "「学びを、冒険に変える。」ボードゲーム形式の学習アプリ。正解してコインを集める達成感を演出し、教育現場での学習継続率を飛躍的に向上させました。"
    },
    {
      title: "授業内容確認サバイバル：LAST WAR",
      url: "https://hungryot711-bot.github.io/lastwar/",
      tags: ["エデュテインメント", "リアルタイム性"],
      description: "サバイバル要素を取り入れた知識定達確認ツール。正解し続けなければ生き残れない緊張感で、学生の集中力を最後まで維持させます。"
    },
    {
      title: "感染症タイピングパズル",
      url: "https://hungryot711-bot.github.io/puzzle/",
      tags: ["記憶定着アルゴリズム", "パズル"],
      description: "暗記の苦痛をパズルの快感に。文字をつなげて疾患名を完成させるプロセスを通じ、視覚と操作で感染症知識を定着させます。"
    }
  ];

  return (
    <section style={{ textAlign: 'left' }}>
      <h2 style={{ color: colors.primary, borderBottom: `2px solid ${colors.accent}`, display: 'inline-block', marginBottom: '30px' }}>技術・開発実績</h2>
      {apps.map((app, index) => (
        <div key={index} style={{ background: '#fff', padding: '25px', borderRadius: '12px', border: `1px solid ${colors.border}`, marginBottom: '25px', boxShadow: '0 4px 6px rgba(0,0,0,0.02)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '10px' }}>
            <strong style={{ fontSize: '1.2rem', color: colors.primary }}>{app.title}</strong>
            <a href={app.url} target="_blank" rel="noopener noreferrer" style={{ background: colors.primary, color: '#fff', padding: '5px 15px', borderRadius: '20px', fontSize: '0.8rem', textDecoration: 'none', fontWeight: 'bold' }}>サイトを見る ↗</a>
          </div>
          <div style={{ margin: '12px 0' }}>
            {app.tags.map(tag => (
              <span key={tag} style={{ background: '#eef2f7', color: '#555', padding: '3px 12px', borderRadius: '15px', fontSize: '0.75rem', marginRight: '6px' }}>{tag}</span>
            ))}
          </div>
          <p style={{ fontSize: '0.95rem', color: colors.text, lineHeight: '1.7', margin: 0 }}>{app.description}</p>
        </div>
      ))}
    </section>
  );
};

// ④基本経歴・資格・スキル
export const Profile = () => (
  <section style={{ textAlign: 'left' }}>
    <h2 style={{ color: colors.primary, borderBottom: `2px solid ${colors.accent}`, display: 'inline-block', marginBottom: '30px' }}>経歴・資格・スキル</h2>
    
    <div style={{ background: '#fff', padding: '25px', borderRadius: '12px', border: `1px solid ${colors.border}`, marginBottom: '20px' }}>
      <h3 style={{ fontSize: '1.1rem', color: colors.primary, marginBottom: '15px' }}>保有資格</h3>
      <ul style={{ fontSize: '0.95rem', lineHeight: '1.8', color: colors.text, paddingLeft: '20px' }}>
        <li><b>作業療法士</b>（国家資格）</li>
        <li><b>保育士</b>（国家資格）</li>
        <li><b>発達障害コミュニケーション指導者 初級</b></li>
        <li>普通自動車第一種運転免許</li>
      </ul>
    </div>

    <div style={{ background: '#fff', padding: '25px', borderRadius: '12px', border: `1px solid ${colors.border}` }}>
      <h3 style={{ fontSize: '1.1rem', color: colors.primary, marginBottom: '15px' }}>技術スキル</h3>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
        
        {/* フロントエンド */}
        <div>
          <span style={{ color: colors.highlight, fontWeight: 'bold' }}>Front-end</span>
          <ul style={{ fontSize: '0.9rem', color: '#555', listStyle: 'none', padding: 0, marginTop: '5px' }}>
            <li>React (Component-based UI)</li>
            <li>TypeScript (Type-safe coding)</li>
            <li>JavaScript (ES6+)</li>
            <li>HTML5 / CSS3</li>
          </ul>
        </div>

        {/* バックエンド・自動化 */}
        <div>
          <span style={{ color: colors.highlight, fontWeight: 'bold' }}>Back-end / Script</span>
          <ul style={{ fontSize: '0.9rem', color: '#555', listStyle: 'none', padding: 0, marginTop: '5px' }}>
            <li>Node.js</li>
            <li>Google Apps Script (GAS)</li>
            <li>Firebase (Auth / Firestore)</li>
            <li>Stripe API (決済実装)</li>
          </ul>
        </div>

        {/* その他 */}
        <div>
          <span style={{ color: colors.highlight, fontWeight: 'bold' }}>Development Tools</span>
          <ul style={{ fontSize: '0.9rem', color: '#555', listStyle: 'none', padding: 0, marginTop: '5px' }}>
            <li>Vite (Build Tool)</li>
            <li>Git / GitHub</li>
            <li>npm / Desktop App Dev</li>
          </ul>
        </div>

      </div>
    </div>
  </section>
);