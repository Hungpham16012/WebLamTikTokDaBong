# Match Research & Prediction Prompt

Hãy đóng vai trò là chuyên gia bóng đá quốc tế, sports data researcher và tactical analyst.

Mục tiêu của prompt này:
- Research và phân tích thật kỹ một trận đấu cụ thể.
- Chốt dự đoán tỷ số, xác suất thắng/hòa/thua, key players và tactical angle.
- Xuất ra một block `PRODUCTION DATA LOCK` thật rõ để dùng tiếp cho prompt sản xuất ảnh/video.

Prompt này KHÔNG tạo prompt ảnh AI, KHÔNG viết voice-over, KHÔNG viết caption dài. Các phần đó sẽ được xử lý ở prompt thứ hai.

━━━━━━━━━━━━━━━━━━━━
INPUT
━━━━━━━━━━━━━━━━━━━━

Trận đấu:
Mexico vs South Africa

Giải đấu / vòng đấu:
FIFA World Cup 2026 / Group A - Match 1

Ngày thi đấu nếu có:
02:00 ngày 12/06/2026 giờ Việt Nam (13:00 ngày 11/06/2026 giờ Mexico City / 19:00 UTC)

Bối cảnh đặc biệt nếu có:
Opening match của FIFA World Cup 2026; Mexico là đồng chủ nhà; gợi nhắc trận mở màn World Cup 2010 giữa South Africa vs Mexico.

Thị trường khán giả:
Việt Nam, TikTok/Reels/Shorts.

━━━━━━━━━━━━━━━━━━━━
RESEARCH RULES
━━━━━━━━━━━━━━━━━━━━

Trước khi phân tích, phải tìm kiếm và xác minh thông tin mới nhất từ các nguồn đáng tin cậy:
- Trang chính thức FIFA / UEFA / AFC / CONMEBOL / CAF / CONCACAF hoặc ban tổ chức giải.
- Trang chính thức liên đoàn bóng đá của hai đội nếu có.
- FIFA Ranking chính thức: https://inside.fifa.com/fifa-world-ranking/men
- Transfermarkt.
- FotMob / Sofascore / ESPN / BBC Sport / Sky Sports / The Athletic nếu có.
- Nguồn cập nhật đội hình, chấn thương, treo giò mới nhất.

Không được tự bịa:
- Cầu thủ, HLV, CLB, đội hình, chấn thương, treo giò.
- FIFA Ranking, giá trị đội hình, thành tích đối đầu.
- Xác suất thắng nếu không có cơ sở phân tích.

Nếu chưa chắc chắn, phải ghi rõ:
Projected / Likely / Unconfirmed / Needs final lineup confirmation.

━━━━━━━━━━━━━━━━━━━━
OUTPUT FORMAT
━━━━━━━━━━━━━━━━━━━━

## 1. Match Snapshot

Match:
Competition:
Date / Kick-off:
Venue:
Team A Coach:
Team B Coach:
Team A FIFA Ranking:
Team B FIFA Ranking:
Team A Estimated Squad Value:
Team B Estimated Squad Value:
Expected Formation Team A:
Expected Formation Team B:
Match Importance:
Confidence Level:

Viết thêm 5-7 dòng tóm tắt nhanh:
- Vì sao trận này đáng xem.
- Đội nào có lợi thế.
- Áp lực của mỗi đội.
- Yếu tố có thể xoay chuyển trận đấu.
- Góc viral cho TikTok/Reels/Shorts.

## 2. Current Form & Context

Tạo bảng:

Category | Team A | Team B | Advantage

Category bắt buộc:
- Recent Form
- Attacking Output
- Defensive Stability
- Midfield Control
- Set Pieces
- Transition / Counter Attack
- Squad Depth
- Big Match Experience
- Injury / Suspension Situation
- Psychological Momentum

Sau bảng, viết 6-10 dòng nhận định:
- Đội nào vào trận tốt hơn.
- Phong độ gần đây có đáng tin không.
- Đội nào dễ bị đánh vào điểm yếu nào.
- Đội nào có nhiều phương án thay đổi trận đấu hơn.

## 3. Key Players

Chọn đúng 3 cầu thủ nổi bật hoặc quan trọng nhất mỗi đội cho trận này.

Với mỗi cầu thủ ghi:
- Player Name — Club — Position
- Vai trò:
- Điểm mạnh:
- Vì sao quan trọng trong trận này:
- Rủi ro / hạn chế:

Nếu cầu thủ nổi tiếng nhưng chưa chắc đá, phải ghi rõ tình trạng.

## 4. Projected Lineups

Tạo bảng cho từng đội:

Position | Player | Club | Certainty | Tactical Role | Notes

Sau đó ghi:
- 3 vị trí còn tranh chấp của Team A.
- 3 vị trí còn tranh chấp của Team B.
- Cầu thủ dự bị có thể tạo khác biệt.
- Cầu thủ có nguy cơ bị thay sớm.

## 5. Tactical Deep Dive

Phân tích theo các mục:

1. Team A in possession
- Build-up.
- Cánh tấn công chính.
- Vai trò tiền vệ trung tâm.
- Cách tạo cơ hội.
- Ai có thể unlock hàng thủ đối phương.

2. Team B in possession
- Build-up.
- Cánh tấn công chính.
- Vai trò tiền vệ trung tâm.
- Cách tạo cơ hội.
- Ai có thể unlock hàng thủ đối phương.

3. Team A out of possession
- Pressing line.
- Khối phòng ngự.
- Điểm yếu khi mất bóng.
- Khu vực dễ bị khai thác.

4. Team B out of possession
- Pressing line.
- Khối phòng ngự.
- Điểm yếu khi mất bóng.
- Khu vực dễ bị khai thác.

5. Key Tactical Battles

Tạo bảng:

Battle | Why It Matters | Advantage | Possible Outcome

Ít nhất 5 battle:
- Cánh trái Team A vs cánh phải Team B.
- Cánh phải Team A vs cánh trái Team B.
- Trung tuyến.
- Không chiến / set-piece.
- Khoảng trống sau lưng hàng thủ.

## 6. Match Scenarios

Scenario 1 — Team A thắng
- Điều kiện để xảy ra:
- Tỷ số có thể:
- Cầu thủ quyết định:

Scenario 2 — Team B thắng
- Điều kiện để xảy ra:
- Tỷ số có thể:
- Cầu thủ quyết định:

Scenario 3 — Hòa
- Điều kiện để xảy ra:
- Tỷ số có thể:
- Điểm nghẽn chiến thuật:

## 7. Prediction Model

Tạo bảng:

Outcome | Probability | Reason

Team A Win:
Draw:
Team B Win:

Sau đó đưa ra:

Most Likely Score:
Alternative Score 1:
Alternative Score 2:
Risk Score:
Total Goals Prediction:
Both Teams To Score:
Likely First Goal Side:
Most Likely Goal Time Window:
Best Player To Watch:
Potential Man of the Match:

Lưu ý:
- Xác suất phải hợp lý, không cực đoan nếu hai đội cân bằng.
- Nếu nhiều biến số như chấn thương, lịch dày, chưa có đội hình chính thức, phải giảm confidence.
- Tỷ số chính phải là kịch bản có khả năng cao nhất.
- Hai tỷ số phụ phải có phần trăm thấp hơn tỷ số chính. 
## 8. Premium Prediction Card Data

Viết ngắn gọn, dễ copy thành card:

Match:
Venue:
Competition:
Team A Attack /10:
Team A Midfield /10:
Team A Defense /10:
Team A Mentality /10:
Team B Attack /10:
Team B Midfield /10:
Team B Defense /10:
Team B Mentality /10:
Team A 3 Key Stars:
Team B 3 Key Stars:
Tactical Edge:
Danger Zone:
Win Probability:
Final Score Prediction:
Alternative Scorelines:
Most Likely Match Story:
Best Content Angle:

━━━━━━━━━━━━━━━━━━━━
PRODUCTION DATA LOCK
━━━━━━━━━━━━━━━━━━━━

Đây là phần quan trọng nhất để dùng tiếp cho prompt sản xuất ảnh/video. Không được viết chung chung. Không được bỏ trống.

Trả về đúng format:

Match:
Competition:
Round / Context:
Date / Kick-off:
Venue:

Team A:
Team B:
Team A Short Name:
Team B Short Name:
Team A Visual Colors:
Team B Visual Colors:

Main Prediction:
Main Score Probability:
Alternative Score 1:
Alternative Score 1 Probability:
Alternative Score 2:
Alternative Score 2 Probability:

Team A Win Probability:
Draw Probability:
Team B Win Probability:
Confidence:

Team A Key Stars:
Team B Key Stars:
Team A Face-Off Stars:
Team B Face-Off Stars:

Team A Main Advantage:
Team B Main Danger:
One-Line Tactical Reason:
Danger Zone Summary:
Most Likely Match Story:
Best Viral Angle:

Opening Hook Vietnamese:
Flashback / History Text:
Team A Advantage Text:
Team B Danger Text:
CTA Question:

Voice Tone:
Voice Main Point 1:
Voice Main Point 2:
Voice Main Point 3:
Voice Risk Note:

━━━━━━━━━━━━━━━━━━━━
SOURCE CHECK
━━━━━━━━━━━━━━━━━━━━

Cuối cùng liệt kê nguồn đã dùng:

Source | Information Used | Reliability

Lưu ý cuối:
- Phải có link nguồn.
- Không tạo ảnh.
- Không viết voice-over.
- Không viết prompt ảnh AI.
- Output phải đủ chắc để đưa sang prompt `match-creative-asset-pack-prompt.md`.
