<script>
	import '../app.postcss';
	import Drawer from './Drawer.svelte';
	import LeftSidebar from './LeftSidebar.svelte';
	import RightSidebar from './RightSidebar.svelte';
</script>

<Drawer placement="left">
	<LeftSidebar />
</Drawer>

<slot />

<Drawer placement="right">
	<RightSidebar />
</Drawer>
