<template>
    <div class="app">
        <el-form class="left" label-width="100px">
            <el-form-item label="印刷机类型">
                <el-select v-model="印刷机类型" placeholder="请选择">
                    <el-option label="彩印4色机" value="4"></el-option>
                    <el-option label="彩印6色机" value="6"></el-option>
                </el-select>
            </el-form-item>

            <el-form-item label="数量">
                <el-input
                    class="el-input"
                    type="number"
                    v-model="数量"
                    clearable
                    placeholder="请输入"
                ></el-input>
            </el-form-item>

            <el-form-item label="刀模费">
                <el-input
                    class="el-input"
                    type="number"
                    v-model="刀模费"
                    clearable
                    placeholder="请输入"
                ></el-input>
            </el-form-item>

            <el-form-item label="印刷次数">
                <el-input
                    class="el-input"
                    type="number"
                    v-model="印刷次数"
                    clearable
                    placeholder="请输入"
                ></el-input>
            </el-form-item>

            <el-form-item label="车次费用">
                <el-input
                    class="el-input"
                    type="number"
                    v-model="车次费用"
                    clearable
                    placeholder="请输入"
                ></el-input>
            </el-form-item>

            <el-form-item label="普色版">
                <el-input
                    class="el-input"
                    type="number"
                    v-model="普色版"
                    clearable
                    placeholder="请输入"
                ></el-input>
            </el-form-item>

            <el-form-item label="专色版">
                <el-input
                    class="el-input"
                    type="number"
                    v-model="专色版"
                    clearable
                    placeholder="请输入"
                ></el-input>
            </el-form-item>

            <el-form-item label="材料单价">
                <el-input
                    class="el-input"
                    type="number"
                    v-model="材料单价"
                    clearable
                    placeholder="请输入"
                ></el-input>
            </el-form-item>

            <el-form-item label="开数">
                <el-input
                    class="el-input"
                    type="number"
                    v-model="开数"
                    clearable
                    placeholder="请输入"
                ></el-input>
            </el-form-item>

            <el-form-item label="模数">
                <el-input
                    class="el-input"
                    type="number"
                    v-model="模数"
                    clearable
                    placeholder="请输入"
                ></el-input>
            </el-form-item>

            <el-form-item label="利润率">
                <el-input
                    class="el-input"
                    type="number"
                    v-model="利润率"
                    clearable
                    placeholder="请输入"
                ></el-input>
            </el-form-item>
        </el-form>

        <el-form class="right" label-width="100px">
            <el-form-item label="需要张数">
                <el-input
                    disabled
                    class="el-input"
                    type="number"
                    :value="需要张数"
                ></el-input>
            </el-form-item>

            <el-form-item label="放损">
                <el-input
                    disabled
                    class="el-input"
                    type="number"
                    :value="放损"
                ></el-input>
            </el-form-item>

            <el-form-item label="生产张数">
                <el-input
                    disabled
                    class="el-input"
                    type="number"
                    :value="生产张数"
                ></el-input>
            </el-form-item>

            <el-form-item label="材料金额">
                <el-input
                    disabled
                    class="el-input"
                    type="number"
                    :value="材料金额"
                ></el-input>
            </el-form-item>

            <el-form-item label="印刷费用">
                <el-input
                    disabled
                    class="el-input"
                    type="number"
                    :value="印刷费用"
                ></el-input>
            </el-form-item>

            <el-form-item label="装订费用">
                <el-input
                    disabled
                    class="el-input"
                    type="number"
                    :value="装订费用"
                ></el-input>
            </el-form-item>

            <el-form-item label="模版费">
                <el-input
                    disabled
                    class="el-input"
                    type="number"
                    :value="模版费"
                ></el-input>
            </el-form-item>

            <el-form-item label="小计">
                <el-input
                    disabled
                    class="el-input"
                    type="number"
                    :value="小计"
                ></el-input>
            </el-form-item>

            <el-form-item label="税费">
                <el-input
                    disabled
                    class="el-input"
                    type="number"
                    :value="税费"
                ></el-input>
            </el-form-item>
        </el-form>

        <div class="bottom">
            <div class="item">合计: {{ 合计 }}</div>
            <div class="item">利润: {{ 利润 }}</div>
            <div class="item">单价: {{ 单价 }}</div>
            <div class="item">单价不含税: {{ 单价不含税 }}</div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'App',

    data() {
        return {
            印刷机类型: '',
            数量: '',
            刀模费: '',
            印刷次数: '',
            车次费用: '',
            普色版: '',
            专色版: '',
            材料单价: '',
            // 表示一张原材料纸能够切成几份生产张大小
            开数: '',
            模数: '',
            利润率: '',
        }
    },

    computed: {
        需要张数() {
            if (this.数量 && this.模数) {
                return Math.ceil(Number(this.数量) / Number(this.模数))
            } else {
                return ''
            }
        },

        放损() {
            if ((this.普色版 || this.专色版) && this.需要张数) {
                return Math.ceil(30 + 30 * Number(this.普色版) + 60 * Number(this.专色版) + Number(this.需要张数) * 0.02)
            } else {
                return ''
            }
        },

        生产张数() {
            if (this.需要张数 && this.放损) {
                return Number(this.需要张数) + Number(this.放损)
            } else {
                return ''
            }
        },

        材料金额() {
            if (this.材料单价 && this.生产张数 && this.开数) {
                return (Number(this.材料单价) * (Number(this.生产张数) / Number(this.开数))).toFixed(2)
            } else {
                return ''
            }

        },

        印刷费用() {
            if ((this.普色版 || this.专色版) && this.生产张数 && this.车次费用 && this.印刷次数) {
                return (Number(this.普色版) * 50 + Number(this.专色版) * 75 + Number(this.生产张数) * Number(this.车次费用) * Number(this.印刷次数)).toFixed(2)
            } else {
                return ''
            }
        },

        装订费用() {
            if (this.需要张数 && this.模数) {
                return (10 + Number(this.需要张数) * Number(this.模数) * 0.02).toFixed(2)
            } else {
                return ''
            }
        },

        模版费() {
            if ((this.普色版 || this.专色版) && this.刀模费) {
                return ((Number(this.普色版) + Number(this.专色版)) * 30 + Number(this.刀模费)).toFixed(2)
            } else {
                return ''
            }
        },

        小计() {
            if (this.材料金额 && this.印刷费用 && this.装订费用 && this.模版费) {
                return (Number(this.材料金额) + Number(this.印刷费用) + Number(this.装订费用) + Number(this.模版费)).toFixed(2)
            } else {
                return ''
            }
        },

        税费() {
            if (this.小计) {
                return (Number(this.小计) * 0.1).toFixed(2)
            } else {
                return ''
            }
        },

        合计() {
            if (this.小计 && this.税费 && this.利润率) {
                return ((Number(this.小计) + Number(this.税费)) / (1 - Number(this.利润率))).toFixed(2)
            } else {
                return ''
            }
        },

        利润() {
            if (this.合计 && this.利润率) {
                return (Number(this.合计) * Number(this.利润率)).toFixed(2)
            } else {
                return ''
            }
        },

        单价() {
            if (this.合计 && this.数量) {
                return (Number(this.合计) / Number(this.数量)).toFixed(4)
            } else {
                return ''
            }
        },

        单价不含税() {
            if (this.单价) {
                return (Number(this.单价) / 1.08).toFixed(4)
            } else {
                return ''
            }
        },
    },

    watch: {
    },

    methods: {},

    created() {},
}
</script>

<style lang="less" scoped>
.app {
    box-sizing: border-box;
    padding-top: 20px;
    height: 100%;
    overflow: hidden;
    .left {
        float: left;
        width: 50%;
        height: 90%;
    }
    .right {
        float: right;
        width: 50%;
        height: 90%
    }
    .bottom {
        clear: both;
        height: 10%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 20px;
        background: lightblue;
    }
    .el-input {
        width: 221px;
    }
}
</style>
