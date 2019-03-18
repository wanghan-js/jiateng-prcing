<template>
    <el-container class="app">
        <el-aside>
            <el-menu>
                <el-menu-item index="1">
                    <i class="el-icon-location"></i>
                    <span slot="title">导航一</span>
                </el-menu-item>
                <el-menu-item index="2">
                    <i class="el-icon-menu"></i>
                    <span slot="title">导航二</span>
                </el-menu-item>
                <el-menu-item index="3">
                    <i class="el-icon-document"></i>
                    <span slot="title">导航三</span>
                </el-menu-item>
                <el-menu-item index="4">
                    <i class="el-icon-setting"></i>
                    <span slot="title">导航四</span>
                </el-menu-item>
            </el-menu>
        </el-aside>

        <el-main>
            <el-form ref="form" :model="form" label-width="100px">
                <el-form-item label="活动名称">
                    <el-input class="el-input" v-model="form.name"></el-input>
                </el-form-item>

                <el-form-item label="印刷机类型">
                    <el-select v-model="form.machine" placeholder="请选择印刷机类型">
                        <el-option label="单色机" value="1"></el-option>
                        <el-option label="双色机" value="2"></el-option>
                        <el-option label="四色机" value="4"></el-option>
                        <el-option label="六色机" value="6"></el-option>
                    </el-select>
                </el-form-item>

                <el-form-item label="产品数量">
                    <el-select v-model="form.quantity" placeholder="请选择产品数量范围">
                        <el-option label="1000印张以内" value="400"></el-option>
                        <el-option label="1000印张以内" value="400"></el-option>
                    </el-select>
                </el-form-item>

                <el-form-item label="活动区域">
                    <el-select v-model="form.region" placeholder="请选择活动区域">
                        <el-option label="区域一" value="shanghai"></el-option>
                        <el-option label="区域二" value="beijing"></el-option>
                    </el-select>
                </el-form-item>

                <el-form-item label="即时配送">
                    <el-switch v-model="form.delivery"></el-switch>
                </el-form-item>

                <el-form-item label="活动性质">
                    <el-checkbox-group v-model="form.type">
                        <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
                        <el-checkbox label="地推活动" name="type"></el-checkbox>
                        <el-checkbox label="线下主题活动" name="type"></el-checkbox>
                        <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
                    </el-checkbox-group>
                </el-form-item>

                <el-form-item label="特殊资源">
                    <el-radio-group v-model="form.resource">
                        <el-radio label="线上品牌商赞助"></el-radio>
                        <el-radio label="线下场地免费"></el-radio>
                    </el-radio-group>
                </el-form-item>

                <el-form-item label="活动形式">
                    <el-input type="textarea" v-model="form.desc"></el-input>
                </el-form-item>

                <el-form-item>
                    <el-button type="primary" @click="onSubmit">立即创建</el-button>
                    <el-button>取消</el-button>
                </el-form-item>
            </el-form>
        </el-main>
    </el-container>
</template>

<script>
export default {
    name: 'App',

    data() {
        return {
            form: {
                name: '',
                machine: '',
                quantity: 0,
                region: '',
                delivery: false,
                type: [],
                resource: '',
                desc: '',
            },
        }
    },

    watch: {
        form(data) {
            console.log(data)
        },
    },

    methods: {
        onSubmit() {
            console.log('submit!')
        },
    },

    created() {
    },
}
</script>

<style lang="less" scoped>
.app {
    // height: 100%;
    .el-input {
        width: 221px;
    }
}
</style>
