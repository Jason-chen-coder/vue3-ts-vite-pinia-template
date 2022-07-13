<template>
    <div>
        <router-link to="/">点击返回首页</router-link>
        <h1>天气预报:</h1>
        <template v-if="Object.keys(info).length > 0">
            <div>省份：{{ info.cityInfo.parent }}</div>
            <div>城市：{{ info.cityInfo.city }}</div>
            <ul style="width: 20%; margin: 0 auto">
                <li
                    v-for="item in info.data.forecast"
                    :key="item.date"
                    style="margin-bottom: 10px"
                >
                    <div>{{ item.ymd }} | {{ item.week }}</div>
                    <div>{{ item.high }} | {{ item.low }}</div>
                </li>
            </ul>
        </template>
        <template v-else>
            <p>暂无数据</p>
        </template>
    </div>
</template>

<script lang="ts">
import axios from '@/utils/axios';
import { defineComponent, ref } from 'vue';
interface Forecast {
    cityInfo: {
        parent: string;
        city: string;
    };
    data: {
        forecast: [ForecastItem];
    };
}
interface ForecastItem {
    ymd: string;
    high: string;
    low: string;
    date: string;
    week: string;
}

export default defineComponent({
    setup() {
        let info = ref({} as Forecast);
        const result = async () => {
            let res = await axios({
                method: 'get',
                url: '/api/weather/city/101280601',
            });
            info.value = res;
            console.log(res, '=====>res');
        };
        result();
        return {
            info,
        };
    },
});
</script>

<style scoped></style>
