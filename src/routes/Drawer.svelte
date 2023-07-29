<script lang="ts">
	import { Drawer, Button } from 'flowbite-svelte';
	import { sineIn } from 'svelte/easing';

	export let placement: 'left' | 'right';

	let activateClickOutside = false;
	let backdrop = false;
	let hidden = false;
	let transitionParams = {
		x: placement === 'right' ? 320 : -320,
		duration: 200,
		easing: sineIn
	};

	let iconPositions: {
		default: string;
		hidden: string;
	};
	$: iconPositions =
		placement === 'left'
			? {
					default: 'left-80',
					hidden: 'left-0'
			  }
			: {
					default: 'right-80',
					hidden: 'right-0'
			  };

	$: iconPosition = hidden ? iconPositions.hidden : iconPositions.default;
</script>

<Button
	color="light"
	class="!p-2 absolute top-0 {iconPosition} mb-4 border-0 rounded-none hover:text-gray hover:bg-white focus:ring-0"
	size="lg"
	on:click={() => (hidden = !hidden)}
>
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="24"
		height="24"
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		stroke-width="2"
		stroke-linecap="round"
		stroke-linejoin="round"
		class="tabler-icon {`tabler-icon-arrow-bar-${placement}`}"
	>
		{#if (placement === 'right' && !hidden) || (placement === 'left' && hidden)}
			<path d="M20 12l-10 0" /><path d="M20 12l-4 4" /><path d="M20 12l-4 -4" /><path
				d="M4 4l0 16"
			/>
		{:else if (placement === 'left' && !hidden) || (placement === 'right' && hidden)}
			<path d="M4 12l10 0" /><path d="M4 12l4 4" /><path d="M4 12l4 -4" /><path d="M20 4l0 16" />
		{/if}
	</svg>
</Button>

<Drawer
	{activateClickOutside}
	{backdrop}
	{placement}
	transitionType="fly"
	{transitionParams}
	bind:hidden
	id="sidebarLeft"
	class="p-2"
>
	<slot />
</Drawer>
