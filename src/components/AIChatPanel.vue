<template>
  	<div class="w-[400px] relative rounded-tl-xl rounded-tr-none rounded-br-none rounded-bl-xl bg-gray-400 h-[833px] flex flex-col items-start justify-start max-w-full max-h-full overflow-auto text-left text-sm text-white font-inter">
    		<div class="self-stretch rounded-tl-xl rounded-tr-none rounded-b-none bg-gray-300 h-[60px] flex flex-row items-center justify-between py-4 px-5 box-border gap-0">
      			<div class="flex flex-row items-center justify-start gap-3">
        				<img class="w-8 rounded-2xl h-8 object-cover" alt="" src="./assets/icon/AI Icon.svg" />
        				<div class="flex flex-col items-start justify-start">
          					<div class="relative leading-[16.8px] font-semibold">AI Assistant</div>
          					<div class="relative text-xs leading-[14.4px] text-slategray">Script Analysis & Breakdown</div>
        				</div>
      			</div>
      			<div class="flex flex-row items-center justify-start gap-2">
        				<img class="w-8 rounded-md h-8" alt="" src="./assets/icon/Minimize.svg" />
        				<img class="w-8 rounded-md h-8" alt="" src="./assets/icon/Close.svg" />
      			</div>
    		</div>
    		<div class="self-stretch flex-1 flex flex-col items-start justify-start p-5 gap-4 text-goldenrod">
      			<div class="self-stretch flex flex-row items-start justify-start gap-3 text-darkgray">
        				<img class="w-8 rounded-2xl h-8 object-cover" alt="" src="./assets/icon/AI Icon.svg" />
        				<div class="flex-1 rounded-t-xl rounded-br-xl rounded-bl bg-gray-300 flex flex-col items-start justify-start p-3 gap-2">
          					<div class="self-stretch relative leading-[16.8px] font-medium text-white">Hello! I'm your AI assistant for script analysis and project management.</div>
            						<div class="self-stretch relative leading-[16.8px]">I can help you:</div>
            						<div class="self-stretch flex flex-col items-start justify-start gap-1">
              							<div class="self-stretch relative leading-[16.8px]">• Upload and analyze scripts</div>
              							<div class="self-stretch relative leading-[16.8px]">• Generate automatic breakdowns</div>
              							<div class="self-stretch relative leading-[16.8px]">• Estimate budgets and timelines</div>
              							<div class="self-stretch relative leading-[16.8px]">• Answer production questions</div>
            						</div>
          					</div>
        				</div>
        				<div class="self-stretch flex flex-col items-start justify-start gap-3">
          					<div class="self-stretch rounded-lg bg-gray-500 border-goldenrod border-solid border-[2px] box-border h-[120px] flex flex-col items-center justify-center gap-2">
            						<img class="w-8 relative h-8 overflow-hidden shrink-0" alt="" src="./assets/icon/Upload Icon.svg" />
            						<div class="relative leading-[16.8px] font-semibold">Drop script here or click to upload</div>
            						<div class="relative text-xs leading-[14.4px] text-slategray">Supports PDF, TXT, FDX formats</div>
          					</div>
          					<div class="self-stretch rounded-lg bg-goldenrod h-10 flex flex-row items-center justify-center gap-2 text-gray-400">
            						<img class="w-4 relative h-4 overflow-hidden shrink-0 object-cover" alt="" src="./assets/icon/File Icon.svg" />
            						<div class="relative leading-[16.8px] font-semibold">Choose File</div>
          					</div>
        				</div>
        				<div class="self-stretch flex flex-row items-start justify-start gap-3 text-xs">
          					<div class="w-8 rounded-2xl bg-gray-100 h-8 flex flex-row items-center justify-center">
            						<div class="relative leading-[14.4px] font-semibold">JD</div>
          					</div>
          					<div class="flex-1 rounded-t-xl rounded-br rounded-bl-xl bg-gray-100 flex flex-col items-start justify-start p-3 text-sm text-white">
            						<div class="self-stretch relative leading-[16.8px] font-medium">Can you analyze the script for "The Last Journey"?</div>
              							</div>
              							</div>
              							<div class="self-stretch flex flex-row items-start justify-start gap-3 text-white">
                								<img class="w-8 rounded-2xl h-8 object-cover" alt="" src="./assets/icon/AI Icon.svg" />
                								<div class="flex-1 rounded-t-xl rounded-br-xl rounded-bl bg-gray-300 flex flex-col items-start justify-start p-3 gap-2">
                  									<div class="self-stretch relative leading-[16.8px] font-medium">I've analyzed "The Last Journey" script. Here's what I found:</div>
                  									<div class="self-stretch flex flex-col items-start justify-start gap-1 text-darkgray">
                    										<div class="self-stretch relative leading-[16.8px]">📄 Pages: 98</div>
                    										<div class="self-stretch relative leading-[16.8px]">🎬 Scenes: 47</div>
                    										<div class="self-stretch relative leading-[16.8px]">👥 Characters: 12</div>
                    										<div class="self-stretch relative leading-[16.8px]">📍 Locations: 8</div>
                    										<div class="self-stretch relative leading-[16.8px]">💰 Est. Budget: $850K - $1.2M</div>
                  									</div>
                  									<div class="self-stretch rounded-md bg-goldenrod h-8 flex flex-row items-center justify-center text-xs text-gray-400">
                    										<div class="relative leading-[14.4px] font-semibold">Generate Full Breakdown</div>
                  									</div>
                								</div>
              							</div>
              							</div>
              							<div class="self-stretch rounded-t-none rounded-br-xl rounded-bl-none bg-gray-300 flex flex-row items-center justify-start py-4 px-5 gap-3 text-slategray">
                								<div class="flex-1 rounded-lg bg-gray-400 h-10 flex flex-row items-center justify-start py-0 px-4 box-border">
                  									<div class="flex-1 relative leading-[16.8px]">Ask about scripts, budgets, scheduling...</div>
                								</div>
                								<img class="w-10 rounded-lg h-10 object-cover" alt="" src="./assets/icon/Send Button.svg" />
              							</div>
              							</div>
              							</template>