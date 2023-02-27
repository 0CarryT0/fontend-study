<template>
    <div class="custom-checkbox">
        <input type="checkbox" :id="id" :checked="isDone" class="checkbox"/>
        <label :for="id" class="checkbox-label">{{ label }}</label>
    </div>
</template>
<script>
import uniqueId from 'lodash.uniqueid';

export default {
    props: {
        label: { required: true, type: String },
        done: { default: false, type: Boolean }
    },
    data() {
        return {
            isDone: this.done,
            id: uniqueId('todo-')
        };
    }
};
</script>

<style scoped>
.custom-checkbox>.checkbox-label {
    font-family: Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-weight: 400;
    font-size: 16px;
    font-size: 1rem;
    line-height: 1.25;
    color: #0b0c0c;
    display: block;
    margin-bottom: 5px;
}

.custom-checkbox>.checkbox {
    font-family: Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-weight: 400;
    font-size: 16px;
    font-size: 1rem;
    line-height: 1.25;
    box-sizing: border-box;
    width: 100%;
    height: 40px;
    height: 2.5rem;
    margin-top: 0;
    padding: 5px;
    border: 2px solid #0b0c0c;
    border-radius: 0;
    appearance: none;
}

.custom-checkbox>input:focus {
    outline: 3px dashed #fd0;
    outline-offset: 0;
    box-shadow: inset 0 0 0 2px;
}

.custom-checkbox {
    font-family: Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    font-weight: 400;
    font-size: 1.6rem;
    line-height: 1.25;
    display: block;
    position: relative;
    min-height: 40px;
    margin-bottom: 10px;
    padding-left: 40px;
    clear: left;
}

.custom-checkbox>input[type="checkbox"] {
    -webkit-font-smoothing: antialiased;
    cursor: pointer;
    position: absolute;
    z-index: 1;
    top: -2px;
    left: -2px;
    width: 44px;
    height: 44px;
    margin: 0;
    opacity: 0;
}

.custom-checkbox>.checkbox-label {
    font-size: inherit;
    font-family: inherit;
    line-height: inherit;
    display: inline-block;
    margin-bottom: 0;
    padding: 8px 15px 5px;
    cursor: pointer;
    touch-action: manipulation;
}

.custom-checkbox>label::before {
    content: "";
    box-sizing: border-box;
    position: absolute;
    top: 0;
    left: 0;
    width: 40px;
    height: 40px;
    border: 2px solid currentcolor;
    background: transparent;
}

.custom-checkbox>input[type="checkbox"]:focus+label::before {
    border-width: 4px;
    outline: 3px dashed #228bec;
}

.custom-checkbox>label::after {
    box-sizing: content-box;
    content: "";
    position: absolute;
    top: 11px;
    left: 9px;
    width: 18px;
    height: 7px;
    transform: rotate(-45deg);
    border: solid;
    border-width: 0 0 5px 5px;
    border-top-color: transparent;
    opacity: 0;
    background: transparent;
}

.custom-checkbox>input[type="checkbox"]:checked+label::after {
    opacity: 1;
}

@media only screen and (min-width: 40rem) {

    label,
    input,
    .custom-checkbox {
        font-size: 19px;
        font-size: 1.9rem;
        line-height: 1.31579;
    }
}</style>