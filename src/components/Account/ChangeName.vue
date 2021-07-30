<template>
    <form class="ui form change-name" @submit.prevent="onChangeName">
        <input type="text" placeholder="Nombre y apellidos" v-model="name" :class="{error: formError}">
        <button type="submit" class="ui button primary" :class="{loading}">Actualizar</button>
    </form>
</template>

<script>
import { ref } from 'vue';
import { useStore } from 'vuex';
import * as Yup from 'yup';
import { auth } from '../../utils/firebase';

export default {
    name: 'ChangeName',
    setup() {
        let name = ref('');
        let formError = ref(false);
        let loading = ref(false);

        const store = useStore();

        const schemaForm = Yup.object().shape({ 
            // Va a ser de un mínimo de 6 carácteres
            name: Yup.string().min(6, true).required(),
        })

        const onChangeName = async () => {
            formError.value = false;
            loading.value = true;

            try { 
                await schemaForm.validate({name: name.value}, {abortEarly: false});
                try { 
                    await auth.currentUser.updateProfile({
                        displayName: name.value
                    });
                    store.dispatch('reloadUser');
                } catch (error) {
                    console.log(error);
                }
            } catch (err) {
                err.inner.forEach((error) => {
                    formError.value = error.message;
                })
            }
            loading.value = false;
        };

        return { 
            name,
            onChangeName,
            formError,
            loading,
        
        }

    }
}
</script>

<style lang="scss" scoped>

.ui.form.change-name {
    text-align: center;
    
    input.error {
        border-color: #faa;
        background-color: #ffeded;
    }

    input.success {
        border-color: #95cb48;
        background-color: #d8efb6;
    }

    .ui.button {
        margin-top: 20px;
    }
}

</style>