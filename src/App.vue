<template>
    <div class="app">
        <el-form class="left" label-width="100px">
            <el-form-item label="印刷机类型">
                <el-select v-model="machine" placeholder="请选择">
                    <el-option label="彩印4色机" value="4"></el-option>
                    <el-option label="彩印6色机" value="6"></el-option>
                </el-select>
            </el-form-item>

            <el-form-item label="数量">
                <el-input
                    class="el-input"
                    type="number"
                    v-model="quantity"
                    clearable
                    placeholder="请输入"
                ></el-input>
            </el-form-item>

            <el-form-item label="刀模费">
                <el-input
                    class="el-input"
                    type="number"
                    v-model="daomoPrice"
                    clearable
                    placeholder="请输入"
                ></el-input>
            </el-form-item>

            <el-form-item label="印刷次数">
                <el-input
                    class="el-input"
                    type="number"
                    v-model="printTimes"
                    clearable
                    placeholder="请输入"
                ></el-input>
            </el-form-item>

            <el-form-item label="车次费用">
                <el-input
                    class="el-input"
                    type="number"
                    v-model="checiPrice"
                    clearable
                    placeholder="请输入"
                ></el-input>
            </el-form-item>

            <el-form-item label="普色版">
                <el-input
                    class="el-input"
                    type="number"
                    v-model="pusebanCount"
                    clearable
                    placeholder="请输入"
                ></el-input>
            </el-form-item>

            <el-form-item label="专色版">
                <el-input
                    class="el-input"
                    type="number"
                    v-model="zhuansebanCount"
                    clearable
                    placeholder="请输入"
                ></el-input>
            </el-form-item>

            <el-form-item label="材料单价">
                <el-input
                    class="el-input"
                    type="number"
                    v-model="materialPrice"
                    clearable
                    placeholder="请输入"
                ></el-input>
            </el-form-item>

            <el-form-item label="开数">
                <el-input
                    class="el-input"
                    type="number"
                    v-model="kaishu"
                    clearable
                    placeholder="请输入"
                ></el-input>
            </el-form-item>

            <el-form-item label="模数">
                <el-input
                    class="el-input"
                    type="number"
                    v-model="moshu"
                    clearable
                    placeholder="请输入"
                ></el-input>
            </el-form-item>

            <el-form-item label="利润率">
                <el-input
                    class="el-input"
                    type="number"
                    v-model="profit"
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
                    :value="zhangshu"
                ></el-input>
            </el-form-item>

            <el-form-item label="放损">
                <el-input
                    disabled
                    class="el-input"
                    type="number"
                    :value="fangsun"
                ></el-input>
            </el-form-item>

            <el-form-item label="生产张数">
                <el-input
                    disabled
                    class="el-input"
                    type="number"
                    :value="productionZhangshu"
                ></el-input>
            </el-form-item>

            <el-form-item label="材料金额">
                <el-input
                    disabled
                    class="el-input"
                    type="number"
                    :value="materialAmount"
                ></el-input>
            </el-form-item>

            <el-form-item label="印刷费用">
                <el-input
                    disabled
                    class="el-input"
                    type="number"
                    :value="printAmount"
                ></el-input>
            </el-form-item>
        </el-form>

        <div class="bottom"></div>
    </div>
</template>

<script>
export default {
    name: 'App',

    data() {
        return {
            machine: '',
            quantity: '',
            daomoPrice: '',
            printTimes: '',
            checiPrice: '',
            pusebanCount: '',
            zhuansebanCount: '',
            materialPrice: '',
            kaishu: '',
            moshu: '',
            profit: '',
        }
    },

    computed: {
        zhangshu() {
            if (this.quantity && this.moshu) {
                return Math.ceil(this.quantity / this.moshu)
            } else {
                return ''
            }
        },

        fangsun() {
            return Math.ceil(30 + 30 * this.pusebanCount + 60 * this.zhuansebanCount + this.zhangshu * 0.02)
        },

        productionZhangshu() {
            return this.zhangshu + this.fangsun
        },

        materialAmount() {
            return (this.materialPrice * (this.productionZhangshu / this.kaishu)).toFixed(2)
        },

        printAmount() {
            return (this.pusebanCount * 50 + this.zhuansebanCount * 75 + this.productionZhangshu * this.checiPrice * this.printTimes).toFixed(2)
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
    }
    .el-input {
        width: 221px;
    }
}
</style>
