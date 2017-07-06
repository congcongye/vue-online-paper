<template>
  <div>
    <el-table ref="paperTable" :data="paperlist" tooltipEffect="dark" @selection-change="SelectionChange" style="width:100%; header-align:center" border>
      <el-table-column type="selection" width="60"></el-table-column>
      <el-table-column prop="title" label="标题" width="150"></el-table-column>
      <el-table-column label="日期" width="150"><template scope="scope">{{scope.row.date}}</template></el-table-column>
      <el-table-column prop="state" label="状态" width="150" v-show=state===0>发布中</el-table-column>
      <el-table-column label="操作" >
        <template scope="scope">
          <el-button @click.native.prevent="deleteRow(scope.$index, paperlist)" type="text"  size="big">编辑</el-button>
          <el-button @click.native.prevent="deleteRow(scope.$index, paperlist)" type="text"  size="big">删除</el-button>
          <el-button @click.native.prevent="deleteRow(scope.$index, paperlist)" type="text"  size="big">查看数据</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div style="margin-top: 20px">
      <el-button @click="toggleSelection([paperlist[1], paperlist[2]])">切换第二、第三行的选中状态</el-button>
      <el-button @click="toggleSelection()">取消选择</el-button>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        paperlist: [{
          date: '2016-05-03',
          title: '王小虎',
          state: '0'
        }, {
          date: '2016-05-02',
          title: '王小虎',
          state: '1'
        }, {
          date: '2016-05-04',
          title: '王小虎',
          state: '2'
        }, {
          date: '2016-05-01',
          title: '王小虎',
          state: '1'
        }],
        multipleSelection: []
      }
    },
    methods: {
      toggleSelection(rows) {
        if (rows) {
          rows.forEach(row => {
            this.$refs.paperTable.toggleRowSelection(row);
          });
        } else {
          this.$refs.paperTable.clearSelection();
        }
      },
      SelectionChange(val) {
        this.multipleSelection = val;
      },
      deleteRow(index, rows) {
        rows.splice(index, 1);
      }
    }
  }
</script>
