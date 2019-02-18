<template>
    <el-row class="tac">
        <el-col :span="24">
            <el-menu
            default-active="Dashboard"
            router
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
            background-color="#2e3e4e"
            text-color="#fff"
            active-text-color="#ffd04b">
                <el-submenu :index="firstMenu.id" v-for="firstMenu in menu" :key="firstMenu.id">
                    <template slot="title">
                        <i :class="firstMenu.icon"></i>
                        <span>{{ firstMenu.name }}</span>
                    </template>
                    <el-menu-item-group class="over-hide">
                        <el-menu-item v-for="subMenu in firstMenu.sub" :index="subMenu.componentName" :key="subMenu.componentName">
                            {{ subMenu.name }}
                        </el-menu-item>
                    </el-menu-item-group>
                    
                </el-submenu>
            
            </el-menu>
        </el-col>
    </el-row>
</template>

<script>
    import menu from '@/config/menu-config'

    export default {
        data () {
            return {
                menu: menu
            }
        },
        methods: {
            handleOpen (key, keyPath) {
                // console.log(key, keyPath)
            },
            handleClose (key, keyPath) {
                // console.log(key, keyPath)
            }
        }
    }
</script>

<style scoped>
  .over-hide{
    overflow: hidden;
  }

</style>
