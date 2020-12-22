import React from "react"
import FirstPage from "./FirstPage";
import SecondPage from "./SecondPage";
import ThirdPage from "./ThirdPage";
import CalcForm from "./CalcForm";

export default class BodyComponent extends React.Component {
    render() {
        return (
            <div style={{overflow: "hidden"}}>
                <FirstPage>
                    <h1>Founding Principles</h1>
                    <p>
                        If I were to define my style of investing money by <a
                        href={"https://en.wikipedia.org/wiki/Benjamin_Graham"}> Benjamin Graham's </a> standards, I
                        would say I am
                        a long term
                        slow and steady ...lazy... investor. I am the guy that doesn't want to overthink his investing
                        or jump the
                        first window when the Dow Jones falls 500 points in a day. &#129299;
                    </p>
                    <p>
                        Therefore, my method of investing is the one of <i>Dollar Cost Averaging</i>. If you are not
                        familiar
                        with this method, then let me give you the basics.
                        Instead of trying to speculate about the direction of the price you assume that the price will
                        be jumping up and down but eventually it will
                        go up (duuuh). So to win, all you have to do is let the gains and losses cancel each other out
                        by regularly buying
                        the same thing for the same amount. That way you don't really care if the price went up, or down
                        the day you buy,
                        all you care about is that for every bad price day there will be one or more good price days as
                        eventually you end up higher than where you stared. If that makes no sense try <a
                        href={"https://www.investopedia.com/investing/dollar-cost-averaging-pays/#:~:text=Invest%20the%20same%20amount%20of,amount%20of%20money%20into%20it."}> Investopedia.</a>

                    </p>
                </FirstPage>
                <SecondPage>
                    <h1>For Example</h1>
                    <p>
                        Let's take <a
                        href={"https://www.vanguardinvestor.co.uk/investments/vanguard-s-and-p-500-ucits-etf-usd-distributing"}>VUSA</a>.
                        Let's say you always buy for 60$ or less for simplicity sake.
                    </p>
                    <p>Say you bought this ETF on the: </p>
                    <ul>
                        <li>1st of March 2020 @ 58.8$</li>
                        <li>1st of April 2020 @ 46.82$</li>
                        <li>1st of May 2020 @ 53.7$</li>
                        <li>1st of Jun 2020 @ 58.07$</li>
                        <li>1st of July 2020 @ 59.08$</li>
                        <li>1st of August 2020 @ 62.54$</li>
                    </ul>
                    <p>
                        On the 31st of August @ 66.53$ your portfolio will have 6*66.53$ which yields a total of 399.18
                        and you only paid 339.01$.
                        So if my math is right you have gained 60.17$ by being a chimp &#129297;. Nice one! Obviously
                        plus dividends and minus transaction
                        fees.
                    </p>
                    <p>
                        And for those who are carefully looking at this and haven't been living under a rock,
                        you'll notice this is during the COVID-19 meltdown.
                    </p>

                </SecondPage>
                <ThirdPage>
                    <h1>Is that it?</h1>
                    <p>
                        Well, technically yes ...but no. As you might have noticed I <b>REALLY</b> do not trust mysefl
                        as a financial expert.
                        Hence, I <i>solely</i> invest into index funds. In other words, I bet on the economy as a whole
                        rather than on a single company.
                        That being said, I also bet against the economy.
                    </p>
                    <p className={"small"}>
                        If you already see where I am going with this, then you are most probably reading the wrong
                        website mate.
                    </p>
                    <p>
                        It is commonly known that when the economy is going well, stocks go up. If the economy goes
                        down, bonds go up. And if both go to &#128169; , well take your gold or silver a brace for
                        a &#128169; show.
                    </p>
                    <p>
                        So ideally, what you'd want to do is Dolar Cost average over an index of bonds and stocks and
                        ideally in different economies (i.e. US and Europe). I hope you see how I made this logical
                        conclusion.
                    </p>
                </ThirdPage>
                <SecondPage>
                    <h1>Well...I think I got it, now what?</h1>
                    <p>
                        Well, you need to divide your monthly deposit amongst bonds and stocks in such a way that they
                        always compensate for each other.
                        <a href={"https://en.wikipedia.org/wiki/Ray_Dalio"}>Ray Dalio </a>has his 'All Weather
                        portfolio' that allegedly goes something like this:
                    </p>
                        <ul>
                            <li>30% Stocks
                            </li>
                            <li>55% Fixed Income <br/>
                                <ul>
                                    <li>40% Long Term Bonds</li>
                                    <li>15% Intermediate Term Bonds</li>
                                </ul>
                            </li>
                            <li>15% Commodities
                                <ul>
                                    <li>7.5% Gold</li>
                                    <li>7.5% Broad Diversified</li>
                                </ul>
                            </li>
                        </ul>

                    <p>
                        So, I guess that's it. All you have to do is make sure you invest every month into your account
                        a fixed sum in such a way that it will maintain such a split.
                        However, to be honest I personally don't go like this. I have a little less of Commodities,
                        Little more of Stocks and I have it all indexed. I am not sure whether Ray
                        has indexes or directly stocks. However, this approach has worked for me regardless.
                    </p>
                    <p className={"small"}>
                        *To be truthfully honest my split is as follow. Heads up, I invest solely with Vangaurd.
                    </p>
                        <ul>
                            <li>50% Stocks
                                <ul>
                                    <li><a
                                        href={"https://www.vanguardinvestor.co.uk/investments/vanguard-s-and-p-500-ucits-etf-usd-distributing/overview"}>25%
                                        VUSA</a></li>
                                    <li><a
                                        href={"https://www.vanguardinvestor.co.uk/investments/vanguard-ftse-all-world-high-dividend-yield-ucits-etf-usd-distributing/overview"}>25%
                                        VHYL</a></li>
                                </ul>
                            </li>
                            <li>50% Fixed Income <br/>
                                <ul>
                                    <li><a
                                        href={"https://www.vanguardinvestor.co.uk/investments/vanguard-uk-government-bond-index-fund-gbp-acc"}>7.5%
                                        U.K. Government Bond Index Fund - Accumulation </a></li>
                                    <li><a
                                        href={"https://www.vanguardinvestor.co.uk/investments/vanguard-global-bond-index-fund-gbp-hedged-acc"}>30%
                                        Global Bond Index Fund - Hedged Accumulation
                                    </a></li>
                                    <li><a
                                        href={"https://www.vanguardinvestor.co.uk/investments/vanguard-euro-investment-grade-bond-index-fund-gbp-hedged-acc/overview"}>12.5%
                                        Euro Investment Grade Bond Index Fund - Hedged Accumulation</a></li>
                                </ul>
                            </li>
                        </ul>
                </SecondPage>
                <ThirdPage>
                    <h1>How to divide the sum so that I keep the portfolio?</h1>
                    <p>
                        As I said, I'm a software engineer. So here you go, here is a form. Fill in the Fields
                        accordingly and then get your split.
                    </p>
                    <p className={"small"}>
                        *I am not storing your data or anything...math happens, that's all.
                    </p>

                    <CalcForm/>

                </ThirdPage>
            </div>

        )

    }
}