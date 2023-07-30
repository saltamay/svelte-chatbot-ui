<script lang="ts">
	import { Heading, P } from 'flowbite-svelte';
	import SettingsModal from './SettingsModal.svelte';
</script>

<main class="flex h-screen">
	<article class="flex flex-col mx-auto h-full justify-center">
		<Heading tag="h1" class="text-center text-4xl font-bold text-black">
			Welcome to Svelte Chatbot UI
		</Heading>
		<P class="mt-6 mb-8 text-center text-lg">
			Chatbot UI is an open source clone of OpenAI's ChatGPT UI.
		</P>
		<P class="mb-2 font-bold text-center text-lg">
			Important: Svelte Chatbot UI is 100% unaffiliated with OpenAI.
		</P>
		<P class="mt-6 text-center text-gray-500 dark:text-gray-400">
			Svelte Chatbot UI allows you to plug in your API key to use this UI with their API.
		</P>
		<P class="mt-2 text-center text-gray-500 dark:text-gray-400">
			It is <span class="italic">only</span> used to communicate with their API.
		</P>
		<P class="mt-2 text-center text-gray-500 dark:text-gray-400">
			Please set your OpenAI API key in the bottom left of the sidebar.
		</P>
		<P class="mt-2 text-center text-gray-500 dark:text-gray-400">
			If you don't have an OpenAI API key, you can get one here: <a
				href="https://platform.openai.com/account/api-keys"
				target="_blank"
				rel="noreferrer"
				class="text-blue-500 hover:underline">openai.com</a
			>
		</P>
	</article>

	<SettingsModal />
</main>
