<template>
	<aside :class="`${is_expanded ? 'is-expanded' : ''}`">
		<div class="logo">
			<img src="../assets/brand.ico" alt="Vue" /> 
		</div>

		<div class="menu-toggle-wrap">
			<button class="menu-toggle" @click="ToggleMenu">
				<span class="material-icons">keyboard_double_arrow_right</span>
			</button>
		</div>


		<div class="menu">
			<h3>Hi.. {{ userName }}</h3>
			<router-link to="/" class="button">
				<span class="material-icons">home</span>
				<span class="text">Home</span>
			</router-link>
			<router-link to="/userprofile" class="button">
				<span class="material-icons">info</span>
				<span class="text">About</span>
			</router-link>
			<router-link to="/login" class="button">
				<span class="material-icons">person_add</span>
				<span class="text">Team</span>
			</router-link>
			<router-link to="/processing" class="button">
				<span class="material-icons">public</span>
				<span class="text">Contact</span>
			</router-link>
			<router-view/>
		</div>

		<div class="flex"></div>
		
		<div class="menu">
			<router-link to="/settings" class="button">
				<span class="material-icons">settings</span>
				<span class="text">Settings</span>
			</router-link>
		</div>
	</aside>
</template>

<script>
import { ref } from 'vue'

	const is_expanded = ref(localStorage.getItem("is_expanded") === "true")
	const ToggleMenu = () => {
		is_expanded.value = !is_expanded.value
		localStorage.setItem("is_expanded", is_expanded.value)
	}

export default {
  props: {
    username: String // Define the prop named 'username' of type String
  },
	}
methods:{
	ToggleMenu
}
</script>

<style lang="scss" scoped>
aside {
  position: fixed;
	display: flex;
	flex-direction: column;
	background-image:linear-gradient(180deg,red,black,pink);
	color: white;
	width: calc(2rem + 32px);
	overflow: hidden;
	min-height: 100%;
	padding: 1rem;
	transition: 0.2s ease-in-out;
	z-index: 2;
	.flex {
		flex: 1 1 0%;
	}
	.logo {
		margin-bottom: 1rem;
		img {
			width: 2rem;
		}
	}
	.menu-toggle-wrap {
		display: flex;
		justify-content: flex-end;
		margin-bottom: 1rem;
		position: relative;
		top: 0;
		transition: 0.2s ease-in-out;
		.menu-toggle {
			transition: 0.2s ease-in-out;
			.material-icons {
				font-size: 2rem;
				color: var(--light);
				transition: 0.2s ease-out;
			}
			
			&:hover {
				.material-icons {
					color: var(--primary);
					transform: translateX(0.5rem);
				}
			}
		}
	}
	h3, .button .text {
		opacity: 0;
		transition: opacity 0.3s ease-in-out;
	}
	h3 {
		color: var(--grey);
		font-size: 0.875rem;
		margin-bottom: 0.5rem;
		text-transform: uppercase;
	}
	.menu {
		margin: 0 -1rem;
		.button {
			display: flex;
			align-items: center;
			text-decoration: none;
			transition: 0.2s ease-in-out;
			padding: 0.5rem 1rem;
			.material-icons {
				font-size: 2rem;
				color: var(--light);
				transition: 0.2s ease-in-out;
			}
			.text {
				color: var(--light);
				transition: 0.2s ease-in-out;
			}
			&:hover {
				background-color: var(--dark-alt);
				.material-icons, .text {
					color: var(--primary);
				}
			}
			&.router-link-exact-active {
				background-color: var(--dark-alt);
				border-right: 5px solid var(--primary);
				.material-icons, .text {
					color: var(--primary);
				}
			}
		}
	}
	.footer {
		opacity: 0;
		transition: opacity 0.3s ease-in-out;
		p {
			font-size: 0.875rem;
			color: var(--grey);
		}
	}
	&.is-expanded {
		width: var(--sidebar-width);
		.menu-toggle-wrap {
			top: -3rem;
			
			.menu-toggle {
				transform: rotate(-180deg);
			}
		}
		h3, .button .text {
			opacity: 1;
		}
		.button {
			.material-icons {
				margin-right: 1rem;
			}
		}
		.footer {
			opacity: 0;
		}
	}
	@media (max-width: 1024px) {
		position: absolute;
		z-index: 99;
	}
}
</style>