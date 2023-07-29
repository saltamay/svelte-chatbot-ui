<script>
	import { Button, Input, Label } from 'flowbite-svelte';
	import { Sidebar, SidebarGroup, SidebarItem, SidebarWrapper } from 'flowbite-svelte';
	import NoData from './NoData.svelte';
</script>

<Sidebar class="flex flex-col w-full h-full">
	<SidebarGroup>
		<div class="grid grid-cols-4 gap-2">
			<Button color="light" class="col-span-3 focus:ring-0">
				<div class="flex w-full items-center text-left gap-2">
					<svg
						class="w-4 h-4 text-gray-800 dark:text-white"
						aria-hidden="true"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
					>
						<path
							stroke="currentColor"
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M9 1v16M1 9h16"
						/>
					</svg>
					<span>New chat</span>
				</div></Button
			>
			<Button color="light" class="focus:ring-0">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="16"
					height="16"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
					class="tabler-icon tabler-icon-folder-plus"
					><path d="M12 19h-7a2 2 0 0 1 -2 -2v-11a2 2 0 0 1 2 -2h4l3 3h7a2 2 0 0 1 2 2v3.5" /><path
						d="M16 19h6"
					/><path d="M19 16v6" /></svg
				></Button
			>
		</div>

		<Label class="">
			<Input
				class="focus:border-none focus:ring-none bg-white"
				type="text"
				placeholder="Search..."
				size="md"
			/>
		</Label>
	</SidebarGroup>

	<NoData />

	<SidebarGroup border ulClass="flex flex-col gap-1 my-2">
		<Button color="light" class="border-none focus:ring-0">
			<div class="flex w-full items-center text-left gap-2">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="18"
					height="18"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
					class="tabler-icon tabler-icon-file-import"
					><path d="M14 3v4a1 1 0 0 0 1 1h4" /><path
						d="M5 13v-8a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2h-5.5m-9.5 -2h7m-3 -3l3 3l-3 3"
					/></svg
				>
				<span>Import Data</span>
			</div>
		</Button>
		<Button color="light" class="border-none focus:ring-0">
			<div class="flex w-full items-center text-left gap-2">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="18"
					height="18"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
					class="tabler-icon tabler-icon-file-export"
					><path d="M14 3v4a1 1 0 0 0 1 1h4" /><path
						d="M11.5 21h-4.5a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v5m-5 6h7m-3 -3l3 3l-3 3"
					/></svg
				>
				<span>Export Data</span>
			</div>
		</Button>
		<Button color="light" class="border-none focus:ring-0">
			<div class="flex w-full items-center text-left gap-2">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="18"
					height="18"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
					class="tabler-icon tabler-icon-settings"
					><path
						d="M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065z"
					/><path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" /></svg
				>
				<span>Settings</span>
			</div>
		</Button>
		<Button color="light" class="border-none focus:ring-0">
			<div class="flex w-full items-center text-left gap-2">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="18"
					height="18"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
					class="tabler-icon tabler-icon-key"
					><path
						d="M16.555 3.843l3.602 3.602a2.877 2.877 0 0 1 0 4.069l-2.643 2.643a2.877 2.877 0 0 1 -4.069 0l-.301 -.301l-6.558 6.558a2 2 0 0 1 -1.239 .578l-.175 .008h-1.172a1 1 0 0 1 -.993 -.883l-.007 -.117v-1.172a2 2 0 0 1 .467 -1.284l.119 -.13l.414 -.414h2v-2h2v-2l2.144 -2.144l-.301 -.301a2.877 2.877 0 0 1 0 -4.069l2.643 -2.643a2.877 2.877 0 0 1 4.069 0z"
					/><path d="M15 9h.01" /></svg
				>
				<span>OpenAI API Key</span>
			</div>
		</Button>
		<Button color="light" class="border-none focus:ring-0">
			<div class="flex w-full items-center text-left gap-2">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="18"
					height="18"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
					class="tabler-icon tabler-icon-key"
					><path
						d="M16.555 3.843l3.602 3.602a2.877 2.877 0 0 1 0 4.069l-2.643 2.643a2.877 2.877 0 0 1 -4.069 0l-.301 -.301l-6.558 6.558a2 2 0 0 1 -1.239 .578l-.175 .008h-1.172a1 1 0 0 1 -.993 -.883l-.007 -.117v-1.172a2 2 0 0 1 .467 -1.284l.119 -.13l.414 -.414h2v-2h2v-2l2.144 -2.144l-.301 -.301a2.877 2.877 0 0 1 0 -4.069l2.643 -2.643a2.877 2.877 0 0 1 4.069 0z"
					/><path d="M15 9h.01" /></svg
				>
				<span>Plugin Keys</span>
			</div>
		</Button>
	</SidebarGroup>
</Sidebar>
