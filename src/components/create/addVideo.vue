<template>
	<div class="addVideo">
		<img src="https://s3.hdslb.com/bfs/static/studio-upload-v3/static/img/banner_17.6a1903c.png" style="display:block; margin: 10px auto;">
		<el-button type="primary" class="btn" round>
			<router-link :to="{name:'insertVideo'}" style="color:#fff;padding: 20px 100px;">视频投稿</router-link>
		</el-button>
		<img src="https://s3.hdslb.com/bfs/static/studio-upload-v3/static/img/2233_upload.637ac33.png" class="img1" />

		<div data-v-23b21806="" class="reg-2">上传视频，即表示您已同意<a data-v-23b21806="" href="https://passport.bilibili.com/register/licence"
			 target="_blank"> 哔哩哔哩使用协议 </a>与<a data-v-23b21806="" href="https://member.bilibili.com/studio/creative-treaty"
			 target="_blank"> 哔哩哔哩创作公约 </a>，请勿上传色情，反动等违法视频。
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {

			};
		}
	}
</script>

<style scoped>
	.addVideo {
		height: 650px;
		background-size: cover;
		position: relative;
		background: url(https://s3.hdslb.com/bfs/static/studio-upload-v3/static/img/upload_v2_1_bg.58ffb5e.png) no-repeat center center;
	}

	.btn {
		position: absolute;
		font-size: 24px;
		padding: 0px;
		height: 75px;
		width: 360px;
		border-radius: 50px;
		top: 50%;
		margin-top: -37px;
		left: 50%;
		margin-left: -180px;
	}

	.img1 {
		position: absolute;
		width: 300px;
		top: 50%;
		margin-top: -157px;
		left: 22%;

	}
	
	.reg-2 {
		position: absolute;
		bottom: 150px;
		left: 50%;
		margin-left: -270px;
	}
	
	.reg-2 a {
		display: inline-block;
	}
</style>
