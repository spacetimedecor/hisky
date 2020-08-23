import graphene
from django.contrib.auth import get_user_model
from graphene_django import DjangoObjectType
# from users.models import UserModel
import graphql_jwt


class UserType(DjangoObjectType):
    class Meta:
        model = get_user_model()


class Register(graphene.Mutation):

    message = graphene.String()

    class Arguments:
        firstname = graphene.String()
        lastname = graphene.String()
        username = graphene.String(required=True)
        email = graphene.String(required=True)
        password = graphene.String(required=True)

    @classmethod
    def mutate(cls, info, firstname, lastname, username, password, email):

        try:
            user = get_user_model()(
                first_name=firstname,
                last_name=lastname,
                username=username,
                email=email
            )
            user.set_password(password)
            user.save()
            return Register(message="Thanks for signing up!")

        except Exception:
            return Register(message="Something went wrong :/")


class Mutation(graphene.ObjectType):
    register = Register.Field()
    token_auth = graphql_jwt.ObtainJSONWebToken.Field()
    verify_token = graphql_jwt.Verify.Field()
    refresh_token = graphql_jwt.Refresh.Field()


class Query(graphene.ObjectType):
    me = graphene.Field(UserType)
    users = graphene.List(UserType)

    def resolve_users(self, info):
        return get_user_model().objects.all()

    def resolve_me(self, info):
        user = info.context.user
        if user.is_anonymous:
            raise Exception('Authentication Failure!')
        return user


schema = graphene.Schema(query=Query, mutation=Mutation)
