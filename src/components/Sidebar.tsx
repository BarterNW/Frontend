import React from 'react';

const Sidebar: React.FC = () => {
  return (
    <aside className="bg-[rgba(232,230,230,0.5)] shadow-[0px_11px_30px_rgba(0,0,0,0.07)] flex min-h-[774px] w-full flex-col items-stretch rounded-[11px]">
      <div className="items-start bg-[rgba(239,238,238,0.50)] relative flex w-full gap-2 p-[16.214px]">
        <div className="z-0 flex items-center gap-[5px] overflow-hidden text-sm text-[#212121] font-bold whitespace-nowrap leading-[1.4] my-auto">
          <img
            src="https://api.builder.io/api/v1/image/assets/f2343b698ce34e57b9016c29209ceeb4/d822b3de6fe159d96c3b682abe8793d3c767981f?placeholderIfAbsent=true"
            className="aspect-[1] object-contain w-[26px] fill-[#061C47] self-stretch shrink-0 my-auto"
            alt="BarterNow Logo"
          />
          <div className="text-[#212121] self-stretch my-auto">
            BarterNow
          </div>
        </div>
        <button className="items-center border-slate-200 bg-[#F1F0F0] absolute z-0 flex gap-[7px] w-4 h-4 pl-[3px] pr-0.5 py-[3px] rounded-[66.883px] border-[0.676px] border-solid -right-2 top-[19px] hover:bg-slate-200 transition-colors">
          <img
            src="https://api.builder.io/api/v1/image/assets/f2343b698ce34e57b9016c29209ceeb4/af9f01eee816717103f110d12dcfe5dde72dfc9e?placeholderIfAbsent=true"
            className="aspect-[1.1] object-contain w-[11px] self-stretch my-auto"
            alt="Expand"
          />
        </button>
      </div>
      
      <button className="bg-[rgba(6,28,71,1)] self-center flex min-h-[30px] w-[154px] max-w-full items-center gap-0.5 text-[11px] text-neutral-100 font-medium text-center tracking-[-0.23px] leading-[1.3] justify-center mt-3.5 px-[11px] py-2 rounded-[44px] hover:bg-[#0a2555] transition-colors">
        <img
          src="https://api.builder.io/api/v1/image/assets/f2343b698ce34e57b9016c29209ceeb4/5e73a493a1fc184d0d7d6231c28189b24a50cbec?placeholderIfAbsent=true"
          className="aspect-[1] object-contain w-[9px] self-stretch shrink-0 my-auto"
          alt="Create"
        />
        <span className="text-neutral-100 self-stretch my-auto">
          Create Campaign
        </span>
      </button>
      
      <nav className="flex w-full flex-col items-stretch flex-1 mt-3.5">
        <div className="w-full px-[16.214px] py-0">
          <div className="items-center flex w-full gap-2 overflow-hidden bg-[#B8D1F8] px-[11px] py-2 rounded-[66.883px]">
            <div className="self-stretch flex w-full items-stretch gap-2 flex-1 shrink basis-[0%] my-auto">
              <div className="flex gap-[7px] w-3.5">
                <img
                  src="https://api.builder.io/api/v1/image/assets/f2343b698ce34e57b9016c29209ceeb4/476bfae11d45144e68a671d700698c17569bf905?placeholderIfAbsent=true"
                  className="aspect-[1.08] object-contain w-3.5"
                  alt="Dashboard"
                />
              </div>
              <div className="text-[#061C47] text-base font-medium leading-none flex-1 shrink basis-[0%]">
                Dashboard
              </div>
            </div>
          </div>
          
          {[
            { icon: "https://api.builder.io/api/v1/image/assets/f2343b698ce34e57b9016c29209ceeb4/4f3090c088c381f97b57eaeb6dfc8e15ffd7b78e?placeholderIfAbsent=true", label: "Events" },
            { icon: "https://api.builder.io/api/v1/image/assets/f2343b698ce34e57b9016c29209ceeb4/b412d9e032f8fb5320061376498bf40442f80af7?placeholderIfAbsent=true", label: "Payment History" },
            { icon: "https://api.builder.io/api/v1/image/assets/f2343b698ce34e57b9016c29209ceeb4/11ac6b3d72092ecc33077b30a50ac295e189a74b?placeholderIfAbsent=true", label: "Collaborated Events" },
            { icon: "https://api.builder.io/api/v1/image/assets/f2343b698ce34e57b9016c29209ceeb4/f5cfa4bda37a2421ee782fe716789825921d168e?placeholderIfAbsent=true", label: "Collab Lib" }
          ].map((item, index) => (
            <button key={index} className="flex min-h-[30px] w-full items-center gap-2 overflow-hidden px-[11px] py-2 rounded-[67px] hover:bg-[#B8D1F8] transition-colors">
              <div className="self-stretch flex w-full items-stretch gap-2 flex-1 shrink basis-[0%] my-auto">
                <div className="flex gap-[7px] w-3.5">
                  <img
                    src={item.icon}
                    className="aspect-[1.08] object-contain w-3.5"
                    alt={item.label}
                  />
                </div>
                <div className="text-slate-500 text-base font-medium leading-none flex-1 shrink basis-[0%]">
                  {item.label}
                </div>
              </div>
            </button>
          ))}
        </div>
        
        <div className="border-neutral-100 border min-h-px w-full bg-neutral-100 mt-4 border-solid" />
        
        <div className="text-slate-500 text-base font-medium leading-none self-center mt-4">
          Campaign Status
        </div>
        
        <div className="w-full mt-4 px-[16.214px] py-0">
          {[
            { icon: "https://api.builder.io/api/v1/image/assets/f2343b698ce34e57b9016c29209ceeb4/71e17b1071e510617b30342deeb43a136f5ac58b?placeholderIfAbsent=true", label: "All Campaign" },
            { icon: "https://api.builder.io/api/v1/image/assets/f2343b698ce34e57b9016c29209ceeb4/0ef539d810212daa93c5444925ae9c3743b6567a?placeholderIfAbsent=true", label: "Campaign Left" },
            { icon: "https://api.builder.io/api/v1/image/assets/f2343b698ce34e57b9016c29209ceeb4/7ca40d9859ac9033aecde1617c5c8eb57662f52e?placeholderIfAbsent=true", label: "BarterNow Credit" },
            { icon: "https://api.builder.io/api/v1/image/assets/f2343b698ce34e57b9016c29209ceeb4/39b44f0278dabfa5e7de3ad9d3d06f1645ea74af?placeholderIfAbsent=true", label: "Collaborated Credit" }
          ].map((item, index) => (
            <button key={index} className="flex min-h-[30px] w-full items-center gap-2 overflow-hidden px-[11px] py-2 rounded-[67px] hover:bg-[#B8D1F8] transition-colors">
              <div className="self-stretch flex w-full items-stretch gap-2 flex-1 shrink basis-[0%] my-auto">
                <div className="flex gap-[7px] w-3.5">
                  <img
                    src={item.icon}
                    className="aspect-[1.08] object-contain w-3.5"
                    alt={item.label}
                  />
                </div>
                <div className="text-slate-500 text-base font-medium leading-none flex-1 shrink basis-[0%]">
                  {item.label}
                </div>
              </div>
            </button>
          ))}
        </div>
        
        <div className="border-neutral-100 border min-h-px w-full bg-neutral-100 mt-4 border-solid" />
        
        <div className="w-full mt-4 px-[16.214px] py-0">
          {[
            { icon: "https://api.builder.io/api/v1/image/assets/f2343b698ce34e57b9016c29209ceeb4/01c15147b5d3d36e284be055d3b33cdca41244dc?placeholderIfAbsent=true", label: "Settings" },
            { icon: "https://api.builder.io/api/v1/image/assets/f2343b698ce34e57b9016c29209ceeb4/e66a635c70f7fc46cb1ae444b575ffcdc70fcdf7?placeholderIfAbsent=true", label: "Support" }
          ].map((item, index) => (
            <button key={index} className="flex min-h-[30px] w-full items-center gap-2 overflow-hidden px-[11px] py-2 rounded-[67px] hover:bg-[#B8D1F8] transition-colors">
              <div className="self-stretch flex w-full items-stretch gap-2 flex-1 shrink basis-[0%] my-auto">
                <div className="flex gap-[7px] w-3.5">
                  <img
                    src={item.icon}
                    className="aspect-[1] object-contain w-3.5"
                    alt={item.label}
                  />
                </div>
                <div className="text-slate-500 text-sm font-medium leading-none flex-1 shrink basis-[0%]">
                  {item.label}
                </div>
              </div>
            </button>
          ))}
        </div>
        
        <div className="border-neutral-100 border min-h-px w-full bg-neutral-100 mt-4 border-solid" />
      </nav>
      
      <div className="justify-center items-center flex w-full gap-[7px] mt-3.5 px-[16.214px] py-0">
        <div className="self-stretch flex min-h-[149px] w-full flex-col items-center flex-1 shrink basis-[0%] my-auto">
          <img
            src="https://api.builder.io/api/v1/image/assets/f2343b698ce34e57b9016c29209ceeb4/24835cfdbf84b7f28b370a524a0d4bc8ca005a31?placeholderIfAbsent=true"
            className="aspect-[16.67] object-contain w-[168px] max-w-full flex-1"
            alt="Upgrade"
          />
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
