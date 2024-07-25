import AnimatedMain from "@/component/AnimatedMain";
import FocusableImage from "@/component/FocusableImage";
export const metadata = {
    title: "주방집기류 - 히즈빈스",
    description: "에스프레소에 관하여",
};
export default function Utensils() {
   return (
        <AnimatedMain className="utensils">
            <h2> 집기류 </h2>
            
            <section>
                <h3>1. 벨크리머 (스텐샷잔)</h3>
                <FocusableImage src="img/벨크리머(스텐샷잔).png" alt="벨크리머" />
                <p>* 샷을 받을 때, 사용합니다.</p>
                * 왜 구분해서 쓰나요?<p></p>
                <p>- 시럽과 소스류를 사용하는 커피와 혼용하여 사용할 경우, 커피의 향미에 영향을 줄 수 있다고 보고 구분해서 사용합니다.</p>
            </section>

            <section>
                <h3>2. 스텐 계량컵</h3>
                <FocusableImage src="img/스텐 계량컵.png" alt="스텐 머그컵" />
                <p>* 바닐라 시럽이나, 초코&amp;카라멜 소스를 담고 샷을 받을 때 사용합니다.</p>
                <p>* tip : 시럽이나 소스류를 먼저 담은 후 샷을 받아 스푼으로 잘 저어 녹여 제조합니다.</p>
                <p>* 계량컵에 담긴 시럽 및 소스가 어떤 것인지 잘 소통해주세요 (바닐라, 카라멜, 코초 등등)</p>
            </section>

            <section>
                <h3>3. 포터필터</h3>
                <FocusableImage src="/img/포터필터.png" alt="포터필터" />
                <p>* 포터필터는 커피 가루를 담는 필터, 커피 머신에 장착하는 것으로 손잡이가 달려 있습니다.</p>
                <p>* tip : 스파웃이 달린 포터필터와 스파웃이 ㅇ벗는 바터미스 포터필터가 있습니다. </p>
                <p>* 바텀리스의 경우에는 추출 양상을 눈으로 확인할 수 있어, 채널링을 즉각적으로 확인할 수 있습니다.</p>
                <p>* 스파웃이 있는 포터필터는 스파웃을 통해서 샷을 나누어 담을 수 있는 장점이 있습니다.</p>
            </section>

            <section>
            <h3>4. 도징컵</h3>
                <FocusableImage src="img/도징컵.png" alt="도징컵" />
                <p>* 도징컵은 한번 추출할 양의 갈린 원두를 담아서 포터필터에 옮겨담는 역할을 하는 용기입니다. </p>
                <p>* tip : 도징컵의 원두를 효과적으로 옮겨담기 위한 연습이 필요합니다. 토징컵의 활용이 익숙해지면, 포터필터의 영점을 따로 잡을 필요가 없어지기 때문에 도징과 패킹 과정을 빠르게 작업할 수 있습니다.</p>
            </section>

            <section>
            <h3>5. 디스트리뷰터</h3>
                <FocusableImage src="img/디스트리뷰터.png" alt="디스트리뷰터" />
                <p>* 디스트리뷰터는 포터필터 안의 커피 가루들을 고르게 정리하는 역할을 합니다. </p>
                <p>* tip : 디스트리뷰터는 길이 조절이 가능합니다. 러시때, 그라인더 발열로 추출시간이 빨라졌을때, 디스트리뷰터 길이를 조절해서 추출시간을 지연 시킬 수 있습니다. </p>
                <p>* 기준이 되는 길이를 수치적으로 기억하면 세척을 위해서 분리하더라도 다시 원래의 길이를 유지할 수 있습니다.</p>
            </section>

            <section>
                <h3>6. 스팀피쳐</h3>
                <FocusableImage src="img/스팀피처.png" alt="스팀피처" />
                <p>* 스팀피쳐는 우유거품을 만들거나 우유를 데우는데 사용되는 도구입니다. 300ml, 600ml, 900ml 용량의 스팀피처를 주로 사용합니다. </p>
                <p>* tip : 우유를 데울때, 스팀피쳐를 차갑게 유지하도록 합니다. 피처가 차갑지 않으면 우유를 데울때, 빠르게 온도가 올라서 충분히 공기주입과 롤링에 필요한 시간을 확보하기 어렵습니다. </p>
                <p>* 300ml : 아인슈페너 라떼  (약 100ml)</p>
                <p>* 600ml : 라떼 한 잔 분량 (약 180ml ~ 220ml)</p>
                <p>* 900ml : 라떼 두잔 분량 (약 360ml ~ 440ml)</p>
                <p>* 사용메뉴 : hot 라떼류. (우유를 데우는 모든 메뉴)</p>
            </section>

            <section>
                <h3>7. 삼각 거품기</h3>
                <FocusableImage src="img/삼각거품기.png" alt="삼각거품기" />
                <p>* 따뜻한 라떼류 음료를 만들 때, 파우더 및 소스와 우유를 골고루 섞어 주기 위해 사용합니다. 가루가 완전히 풀어질 수 있도록 30회 이상 저어줍니다. </p>
                <p>* tip :  파우더 및 소스가 담긴 컵에 스티밍 된 우유를 절반 정도 넣어 거품기를 사용하여 잘 섞어준 다음 나머지 우유를 넣어 음료를 완성합니다. </p>
                <p>* 사용 메뉴 : hot 초콜릿 라떼, hot 말차 라떼, Hot, 오곡라떼, 각종 파우더류 용해시\</p>
            </section>
            <section>
                <h3>8. 쉐이커</h3>
                <FocusableImage src="img/쉐이커.png" alt="쉐이커" />
                <p>* 한자로는 '교반기' 혹은 '진탕기' 라고 하지만 보통은 세이커라 불립니다. </p>
                <p>* tip :  흔들기 전에 꼭 뚜껑부위가 잘 닫혀 있는지 확인해야 합니다. </p>
                <p>* 쉐이커의 용량은 700ml로 라떼류 기준으로 최대 2잔을 담을 수 있습니다.</p>
                <p>* 사용 메뉴 : Ice 초콜릿 라떼, Ice 말차 라떼, Ice 오곡라떼</p>
            </section>
            <section>
                <h3>9. 우유거품기</h3>
                <FocusableImage src="img/우유거품기.png" alt="우유거품기" />
                <p>* 아이스 음료의 우유에 폼(거품)을 내기 위해 사용합니다.</p>
                <p>1) 수동 거품기의 경우, 한손으로는 뚜껑과 본체를 동시에 고정하고 한손으로는 뚜껑위의 손잡이를 잡고 위아래로 10회정도 펌핑해주면 풍성한 폼(거품)이 완성됩니다. </p>
                <p>2) 자동 거품기는 버튼을 누르고, 거품기 부분을 우유에 담궈 30초~60초 가량 거품을 내줍니다. </p>
                <p>* tip :  차가운 우유로 펌핑해야 예쁜 거품을 낼 수 있습니다. </p>
                <p>* 사용 메뉴 : 리얼딸기라떼, Ice 카푸치노, ice 카라멜 마끼야또</p>
            </section>
            <section>
                <h3>10. 휘핑기</h3>
                <FocusableImage src="img/휘핑기.png" alt="휘핑기" />
                <p>* 수제 새크림 제조에 사용합니다. </p>
                <p>* tip : 에어로탑과 밀락골드와 설탕을 5:5:1 비율로 크림믹싱통에 넣은 뒤 삼각 거품기로 설타을 녹여준 뒤, 3~4단계의 세기로 크림을 제조해 줍니다. </p>
                <p>* 크림의 점도를 체크하면서 만들어야 하는데 요거트 정도의 점도 보다 좀더 찰랑거리는 정도입니다. </p>
                <p>* 사용메뉴 : 아인슈페너, 아인슈페너 라떼</p>
            </section>
            <section>
                <h3>11. 바스푼</h3>
                <FocusableImage src="img/바스푼.png" alt="바스푼" />
                <p>* 에이드류 제조나 밀크티 등을 제조시, 섞어주는 역할을 합니다.</p>
                <p>* 블렌더 음료를 제조 후 잔에 옮겨 담을 때 사용합니다. </p>
            </section>
            <section>
                <h3>12. 집게</h3>
                <FocusableImage src="img/집게.png" alt="집계" />
                <p>* 음료 제조시 얼음을 너무 많이 담았을 때 사용합니다. </p>
                <p>* 얼음을 덜어 내거나 냉동 딸기, 레몬 슬라이스 등 재료를 위생적으로 넣을 때 사용합니다.</p>
            </section>

            <section>
                <h3>13. 스푼</h3>
                <FocusableImage src="img/스푼.png" alt="스푼" />
                <p>* 청 등의 재료를 컴에 옮겨 담을 때 사용합니다.</p>
            </section>
            
            <section>
                <h3>14. 믹싱 피쳐</h3>
                <FocusableImage src="img/믹싱피처.png" alt="믹싱 피쳐" />
                <p>* 아이스 라떼류(초코, 말차, 오곡), 아이스티를 대용량을 만들 때 미리 제조해두고 필요한 만큼 계량해서 사용합니다. </p>
                <p>* tip:  음료마다 정해진 용량을 암기해 두면, 제조시간이 단축됩니다. </p>
                <p>* 음료가 제공되기 전에 꼭 섞어서 제공 될 수 있도록 해주세요!</p>
            </section>

            <section>
                <h3>15. 얼음 스쿱</h3>
                <FocusableImage src="img/얼음스쿱.png" alt="얼음 스쿱" />
                <p>* 얼음스쿱은 제빙기 안에 있는 얼음을 음료 제조시 사용할 때 옮기는 용도로 사용합니다. </p>
                <p>* tip : 사용한 스쿱은 꼭 제빙기 밖에 보관하여, 제빙기 안에 세균이 번식하는 것을 방지합니다. </p>
                <p>* 꼭 깨끗한 손으로 만지고, 시럽이나 음료등이 묻을 경우 즉시 씻어서 보관합니다. 스쿱을 보관하는 통에 물기가 고여있는 경우 제거해줍니다.</p>
            </section>

            <section>
                <h3>16. BMP 보관용기</h3>
                <FocusableImage src="img/BMP보관용기.png" alt="BMP 보관용기" />
                <p>* BMP 보관용기는 매장에서 다양하게 사용됩니다. 각종 집기류를 보관하며, 세척 후 재료들을 보관하기도 합니다. </p>
                <p>* tip : 용기 내에 물이 고여있지 않도록 건조시키거나 물기를 제거해서 위생적으로 사용하도록 합니다. </p>
            </section>

            <section>
                <h3>17. pc 계량컵</h3>
                <FocusableImage src="img/PC계량컵.png" alt="pc 계량컵" />
                <p>* pc 계량컵은 투명한 계량 컵입니다. 주로 티백을 우리는 용도로 사용하고 있습니다.</p>
                <p>* tip : pc(폴리카보네이트) 소재의 경우 보통 -30도에서 100도 정도가지 내열이 가능합니다. 단, 스크레치에 약하니 설거지시 부드러운 소배로 닦아주시면 좋습니다. </p>
            </section>
        </AnimatedMain>)   
}