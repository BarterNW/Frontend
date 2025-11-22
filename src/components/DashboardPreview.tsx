import React from 'react';
import Sidebar from './Sidebar';

const DashboardPreview: React.FC = () => {
  const statsCards = [
    {
      icon: "https://api.builder.io/api/v1/image/assets/f2343b698ce34e57b9016c29209ceeb4/55e2a90e07a594e87c260c6db953e2c7daee131e?placeholderIfAbsent=true",
      bgColor: "bg-[rgba(211,152,231,1)]",
      title: "Total revenue",
      value: "$53,00989",
      change: "12% increase from last month"
    },
    {
      icon: "",
      bgColor: "bg-[rgba(232,146,113,1)]",
      title: "Events",
      value: "95",
      subValue: "/100",
      change: "10% decrease from last month"
    },
    {
      icon: "",
      bgColor: "bg-[#B8D1F8]",
      title: "Time spent",
      value: "1022",
      subValue: "/1300 Hrs",
      change: "8% increase from last month"
    },
    {
      icon: "",
      bgColor: "bg-[rgba(240,194,116,1)]",
      title: "Campaigns",
      value: "101",
      subValue: "/120",
      change: "2% increase from last month"
    }
  ];

  return (
    <section className="bg-[rgba(184,209,248,0.5)] shadow-[0px_0px_32px_rgba(134,134,134,0.25)] border flex w-full max-w-6xl flex-col items-stretch justify-center px-1 sm:px-2 py-2 sm:py-[9px] rounded-xl border-[rgba(214,214,214,1)] border-solid">
      <div className="justify-center border border-slate-500 bg-white overflow-hidden pr-2 sm:pr-5 lg:pr-[65px] rounded-xl border-solid">
        <div className="gap-2 sm:gap-5 flex flex-col lg:flex-row">
          <div className="w-full lg:w-1/5 hidden lg:block">
            <div className="grow overflow-hidden w-full bg-neutral-100">
              <Sidebar />
            </div>
          </div>
          
          <div className="w-full lg:w-4/5 lg:ml-5">
            <main className="w-full mt-2 sm:mt-3.5">
              <div className="flex w-full flex-col items-stretch px-3 sm:pl-[19px] sm:pr-px">
                <header className="flex w-full items-stretch gap-3 sm:gap-5 flex-wrap justify-between">
                  <h1 className="text-[rgba(0,6,6,1)] text-xl sm:text-2xl md:text-[26px] font-normal tracking-[0.13px]">
                    Dashboard
                  </h1>
                  <div className="flex items-center gap-[15px] my-auto">
                    <img
                      src="https://api.builder.io/api/v1/image/assets/f2343b698ce34e57b9016c29209ceeb4/6d24a2d98bd8c4b4c4d6608f2cd24360a0e5ed3e?placeholderIfAbsent=true"
                      className="aspect-[1.03] object-contain w-[30px] self-stretch shrink-0 my-auto rounded-[0px_0px_0px_0px]"
                      alt="Notification"
                    />
                    <div className="self-stretch flex items-center gap-2.5 my-auto">
                      <div className="bg-[rgba(6,28,71,1)] self-stretch flex h-[29px] items-center gap-px justify-center w-7 my-auto rounded-[31px]">
                        <img
                          src="https://api.builder.io/api/v1/image/assets/f2343b698ce34e57b9016c29209ceeb4/5d655c2f2af9265719a0a24c22173752792f3f18?placeholderIfAbsent=true"
                          className="aspect-[0.97] object-contain w-8 self-stretch my-auto rounded-[81px]"
                          alt="Profile"
                        />
                      </div>
                      <div className="text-[rgba(33,33,33,1)] text-xs font-medium text-center self-stretch my-auto">
                        Deepanshu
                      </div>
                      <img
                        src="https://api.builder.io/api/v1/image/assets/f2343b698ce34e57b9016c29209ceeb4/c37283bcb128926c130c03f2e6e5068a173370d8?placeholderIfAbsent=true"
                        className="aspect-[1] object-contain w-[13px] self-stretch shrink-0 my-auto"
                        alt="Dropdown"
                      />
                    </div>
                  </div>
                </header>
                
                <div className="mt-6 sm:mt-9">
                  <h2 className="text-[#212121] text-xl sm:text-2xl md:text-3xl font-semibold tracking-[0.15px]">
                    Welcome Deepanshu!
                  </h2>
                  <p className="text-slate-500 text-xs sm:text-sm font-light tracking-[0.06px] mt-2 sm:mt-[7px]">
                    Experience everything you wish your agency did — now in one dashboard
                  </p>
                </div>
                
                <div className="w-full max-w-[425px] mt-6 sm:mt-9">
                  <button className="bg-[rgba(6,28,71,1)] flex min-h-[39px] w-full sm:w-auto items-center gap-[3px] text-sm sm:text-[15px] text-neutral-100 font-medium text-center tracking-[-0.29px] leading-[1.3] justify-center px-3.5 py-2.5 rounded-[56px] hover:bg-[#0a2555] transition-colors">
                    <img
                      src="https://api.builder.io/api/v1/image/assets/f2343b698ce34e57b9016c29209ceeb4/8b196523e6c997e52e0fea83308978f8e78b5e68?placeholderIfAbsent=true"
                      className="aspect-[1.09] object-contain w-3 self-stretch shrink-0 my-auto"
                      alt="Create"
                    />
                    <span className="text-neutral-100 self-stretch my-auto">
                      Create a Sample Campaign
                    </span>
                  </button>
                  <p className="text-slate-500 text-[11px] font-light tracking-[0.06px] mt-[7px] border-[rgba(6,6,6,1)] max-md:max-w-full">
                    No credit card. No payment. Just try it out.
                  </p>
                </div>
                
                <div className="w-full mt-[46px] max-md:max-w-full max-md:mt-10">
                  <div className="flex w-full max-w-[778px] items-center gap-[40px_100px] text-[#212121] font-normal justify-between flex-wrap max-md:max-w-full">
                    <h3 className="text-[#212121] text-lg tracking-[0.18px] self-stretch my-auto border-[rgba(33,33,33,1)]">
                      Overview
                    </h3>
                    <div className="items-center self-stretch flex min-h-7 gap-2 text-[11px] tracking-[0.11px] bg-neutral-100 my-auto px-[11px] py-[7px] rounded-[13.864px]">
                      <div className="self-stretch flex items-center gap-2.5 my-auto">
                        <span className="text-[#212121] self-stretch my-auto">
                          Last 30 days
                        </span>
                        <img
                          src="https://api.builder.io/api/v1/image/assets/f2343b698ce34e57b9016c29209ceeb4/5a90e4310a05e38383a1da167ca9ff771c5d1c9c?placeholderIfAbsent=true"
                          className="aspect-[0.92] object-contain w-[11px] self-stretch shrink-0 my-auto"
                          alt="Dropdown"
                        />
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex overflow-x-auto gap-3 md:gap-[13px] mt-4 pb-2 scrollbar-hide">
                    {statsCards.map((card, index) => (
                      <div key={index} className="bg-[rgba(245,245,245,0.50)] flex min-h-32 md:min-h-40 flex-col justify-center min-w-[180px] sm:min-w-[200px] md:w-[219px] flex-shrink-0 px-3 md:pl-3.5 md:pr-[35px] py-4 md:py-[18px] rounded-[11.418px] border-[0.816px] border-solid border-[rgba(6,28,71,0.20)]">
                        <div className="flex flex-col items-stretch justify-center">
                          <div className="flex flex-col items-stretch justify-center">
                            <div className={`${card.bgColor} flex w-[38px] items-center gap-2 h-[38px] p-2.5 rounded-[21px]`}>
                              {card.icon && (
                                <img
                                  src={card.icon}
                                  className="aspect-[1.06] object-contain w-[18px] self-stretch my-auto"
                                  alt={card.title}
                                />
                              )}
                            </div>
                            <div className="font-normal mt-4">
                              <div className="text-slate-500 text-[11px] border-slate-500">
                                {card.title}
                              </div>
                              <div className="text-[#212121] text-[23px] tracking-[0.23px] mt-2 border-[rgba(33,33,33,1)]">
                                {card.value}
                                {card.subValue && (
                                  <span className="text-[13px] tracking-[0.52px]">
                                    {card.subValue}
                                  </span>
                                )}
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center gap-[3px] mt-2">
                            <div className="self-stretch flex gap-2 w-[11px] my-auto">
                              <div className="flex min-h-[11px] w-[11px]" />
                            </div>
                            <div className="text-[#212121] text-[8px] font-normal leading-[1.2] tracking-[0.16px] self-stretch w-[127px] my-auto">
                              {card.change}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              <img
                src="https://api.builder.io/api/v1/image/assets/f2343b698ce34e57b9016c29209ceeb4/13693dfea6b2e1ad687a0d899075bef662e2d206?placeholderIfAbsent=true"
                className="object-contain w-full stroke-[0.816px] stroke-[rgba(6,28,71,0.20)] mt-[22px] max-md:max-w-full"
                alt="Divider"
              />
              
              <div className="flex w-full items-center gap-[40px_100px] justify-between flex-wrap ml-5 mt-[22px] max-md:max-w-full">
                <h3 className="text-[#212121] text-lg font-normal tracking-[0.18px] self-stretch my-auto border-[rgba(33,33,33,1)]">
                  Top Events
                </h3>
                <div className="self-stretch flex items-center gap-2 text-[11px] my-auto">
                  <button className="justify-center items-center border-neutral-100 self-stretch flex min-h-[27px] gap-[5px] text-[#212121] font-[510] whitespace-nowrap text-center w-7 h-7 bg-neutral-100 my-auto px-1.5 rounded-[6.722px] border-[0.56px] border-solid hover:bg-slate-200 transition-colors">
                    <span className="text-[#212121] self-stretch my-auto">
                      􀊫
                    </span>
                  </button>
                  <span className="text-slate-500 font-normal self-stretch my-auto">
                    Filter by <span className="text-[#061C47]">dates</span> | <span className="text-[#061C47]">Status</span>
                  </span>
                </div>
              </div>
              
              <div className="ml-[21px] mt-[22px] max-md:max-w-full">
                <div className="flex w-full max-w-[777px] text-[13px] text-slate-500 font-bold flex-wrap bg-[rgba(245,245,245,0.50)] rounded-[5.923px] border-[0.901px] border-solid border-[rgba(6,28,71,0.20)] max-md:max-w-full">
                  {["Event Name", "Type", "Event Date", "Status", "Submit"].map((header, index) => (
                    <div key={index} className={`flex items-center gap-[7px] justify-center ${index === 3 ? 'w-36' : 'flex-1 shrink basis-[0%]'} p-[11px]`}>
                      <div className="text-slate-500 text-ellipsis self-stretch my-auto">
                        {header}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="items-stretch flex w-full max-w-[777px] flex-wrap bg-[rgba(245,245,245,0.50)] mt-[11px] rounded-[5.923px] border-[0.901px] border-solid border-[rgba(6,28,71,0.20)] max-md:max-w-full">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <div key={index} className={`flex ${index === 3 ? 'w-36' : 'w-[158px] flex-1 basis-[0%]'} shrink h-px gap-[11px] py-[9px]`} />
                  ))}
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardPreview;
